import { useEffect, useState } from 'react';
import { defaultSiteContent } from '../data/defaultContent';
import type { AdminCredentials, SiteContent } from '../types/content';

const ADMIN_SESSION_KEY = 'adarsha-admin-session';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';
const BASE_URL = import.meta.env.BASE_URL;

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    ...init,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed: ${response.status}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

function mergeWithDefaults(content: Partial<SiteContent> | null | undefined): SiteContent {
  return {
    ...clone(defaultSiteContent),
    ...content,
    community: {
      ...clone(defaultSiteContent.community),
      ...(content?.community || {}),
    },
  };
}

function resolveAssetPath(value: string) {
  if (!value) {
    return value;
  }

  if (value.startsWith('data:') || value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  const normalized = value.startsWith('/') ? value.slice(1) : value;
  return `${BASE_URL}${normalized}`;
}

function normalizeContentPaths(content: SiteContent): SiteContent {
  return {
    ...content,
    community: {
      ...content.community,
      groups: content.community.groups.map((group) => ({
        ...group,
        image: resolveAssetPath(group.image),
      })),
      parents: content.community.parents.map((parent) => ({
        ...parent,
        image: resolveAssetPath(parent.image),
      })),
      alumni: content.community.alumni.map((alumni) => ({
        ...alumni,
        image: resolveAssetPath(alumni.image),
      })),
      faculty: content.community.faculty.map((faculty) => ({
        ...faculty,
        photo: resolveAssetPath(faculty.photo),
      })),
    },
  };
}

export async function fetchSiteContent(): Promise<SiteContent> {
  try {
    const content = await requestJson<Partial<SiteContent>>('/api/content');
    return normalizeContentPaths(mergeWithDefaults(content));
  } catch {
    return clone(defaultSiteContent);
  }
}

export async function saveSiteContent(content: SiteContent) {
  await requestJson<{ message: string }>('/api/content', {
    method: 'PUT',
    body: JSON.stringify(content),
  });
}

export async function resetSiteContent() {
  await saveSiteContent(clone(defaultSiteContent));
}

export async function fetchAdminProfile(): Promise<Pick<AdminCredentials, 'username'>> {
  return requestJson<Pick<AdminCredentials, 'username'>>('/api/admin');
}

export async function saveAdminCredentials(credentials: AdminCredentials) {
  await requestJson<{ message: string }>('/api/admin', {
    method: 'PUT',
    body: JSON.stringify(credentials),
  });
}

export async function verifyAdminLogin(credentials: AdminCredentials) {
  const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (response.status === 401) {
    return { authenticated: false };
  }

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return (await response.json()) as { authenticated: boolean; username?: string };
}

export function getAdminSession() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === 'active';
}

export function setAdminSession(active: boolean) {
  if (active) {
    window.sessionStorage.setItem(ADMIN_SESSION_KEY, 'active');
    return;
  }

  window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
}

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(() => clone(defaultSiteContent));
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const reloadContent = async () => {
    setIsLoading(true);
    setError('');

    try {
      const next = await fetchSiteContent();
      setContent(next);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Unable to load content.');
      setContent(clone(defaultSiteContent));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void reloadContent();
  }, []);

  const updateContent = async (next: SiteContent) => {
    await saveSiteContent(next);
    setContent(next);
  };

  return {
    content,
    isLoading,
    error,
    reloadContent,
    setContent: updateContent,
    resetContent: async () => {
      await resetSiteContent();
      setContent(clone(defaultSiteContent));
    },
  };
}
