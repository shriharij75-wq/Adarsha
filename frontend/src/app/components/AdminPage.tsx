import { useEffect, useState, type ChangeEvent, type ReactNode } from 'react';
import { Lock, LogOut, Plus, RefreshCcw, Save, Trash2, Upload } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import {
  fetchAdminProfile,
  getAdminSession,
  saveAdminCredentials,
  setAdminSession,
  verifyAdminLogin,
} from '../lib/siteContent';
import type {
  AdminCredentials,
  AlumniTestimonial,
  Announcement,
  CommunityGroup,
  FacultyMember,
  ParentTestimonial,
  SiteContent,
} from '../types/content';

type AdminPageProps = {
  content: SiteContent;
  onSaveContent: (content: SiteContent) => Promise<void>;
  onResetContent: () => Promise<void>;
};

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-[#1e3a8a]">{title}</h3>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function AdminField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      {children}
    </label>
  );
}

export function AdminPage({ content, onSaveContent, onResetContent }: AdminPageProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => getAdminSession());
  const [credentials, setCredentials] = useState<AdminCredentials>({ username: 'shivalingaswamigalu@2001', password: '' });
  const [loginForm, setLoginForm] = useState<AdminCredentials>({ username: 'shivalingaswamigalu@2001', password: '' });
  const [draft, setDraft] = useState<SiteContent>(content);
  const [statusMessage, setStatusMessage] = useState('');
  const [accountDraft, setAccountDraft] = useState<AdminCredentials>({ username: 'shivalingaswamigalu@2001', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setDraft(content);
  }, [content]);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await fetchAdminProfile();
        setCredentials({ username: profile.username, password: '' });
        setAccountDraft((current) => ({ ...current, username: profile.username }));
        setLoginForm((current) => ({ ...current, username: profile.username }));
      } catch {
        setStatusMessage('Unable to connect to backend admin service.');
      }
    };

    void loadProfile();
  }, [isAuthenticated]);

  const updateAnnouncement = (id: string, field: keyof Announcement, value: string) => {
    setDraft((current) => ({
      ...current,
      announcements: current.announcements.map((announcement) =>
        announcement.id === id ? { ...announcement, [field]: value } : announcement
      ),
    }));
  };

  const updateCommunityGroup = (slug: CommunityGroup['slug'], field: keyof CommunityGroup, value: string) => {
    setDraft((current) => ({
      ...current,
      community: {
        ...current.community,
        groups: current.community.groups.map((group) => (group.slug === slug ? { ...group, [field]: value } : group)),
      },
    }));
  };

  const updateParents = (id: string, field: keyof ParentTestimonial, value: string) => {
    setDraft((current) => ({
      ...current,
      community: {
        ...current.community,
        parents: current.community.parents.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
      },
    }));
  };

  const updateAlumni = (id: string, field: keyof AlumniTestimonial, value: string) => {
    setDraft((current) => ({
      ...current,
      community: {
        ...current.community,
        alumni: current.community.alumni.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
      },
    }));
  };

  const updateFaculty = (id: string, field: keyof FacultyMember, value: string) => {
    setDraft((current) => ({
      ...current,
      community: {
        ...current.community,
        faculty: current.community.faculty.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
      },
    }));
  };

  const replaceFacultyImage = async (id: string, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const photo = await readFileAsDataUrl(file);
    updateFaculty(id, 'photo', photo);
  };

  const replaceImageField = async (
    updater: (value: string) => void,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    updater(await readFileAsDataUrl(file));
  };

  const handleLogin = async () => {
    setIsSubmitting(true);
    try {
      const result = await verifyAdminLogin({
        username: loginForm.username.trim(),
        password: loginForm.password,
      });

      if (!result.authenticated) {
        setStatusMessage('Invalid username or password.');
        return;
      }

      setAdminSession(true);
      setIsAuthenticated(true);
      setStatusMessage('Admin access granted.');
    } catch {
      setStatusMessage('Login failed. Check whether the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      await onSaveContent(draft);
      setStatusMessage('Content saved to backend. Public pages now use the updated data.');
    } catch {
      setStatusMessage('Unable to save content to backend.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = async () => {
    setIsSubmitting(true);
    try {
      await onResetContent();
      setStatusMessage('Content reset to the default site data.');
    } catch {
      setStatusMessage('Unable to reset content on backend.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    setAdminSession(false);
    setIsAuthenticated(false);
    setStatusMessage('Logged out from admin.');
  };

  const handleCredentialSave = async () => {
    if (!accountDraft.username.trim() || !accountDraft.password.trim()) {
      setStatusMessage('Username and password are required to update the admin account.');
      return;
    }

    setIsSubmitting(true);
    try {
      await saveAdminCredentials(accountDraft);
      setCredentials({ username: accountDraft.username, password: '' });
      setStatusMessage('Admin credentials updated on backend.');
    } catch {
      setStatusMessage('Unable to update admin credentials on backend.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 min-h-[70vh] bg-gradient-to-br from-[#fffaf2]/80 via-white/80 to-[#eef4ff]/80">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-2xl">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-[#1e3a8a]">
                <Lock className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Admin Login</h2>
              <p className="mt-2 text-gray-600">Use the admin account to manage teacher, announcements, and community content.</p>
            </div>

            <div className="space-y-4">
              <AdminField label="Username">
                <Input
                  value={loginForm.username}
                  onChange={(event) => setLoginForm((current) => ({ ...current, username: event.target.value }))}
                />
              </AdminField>
              <AdminField label="Password">
                <Input
                  type="password"
                  value={loginForm.password}
                  onChange={(event) => setLoginForm((current) => ({ ...current, password: event.target.value }))}
                />
              </AdminField>
              <Button
                className="w-full bg-[#1e3a8a] hover:bg-[#1e40af]"
                onClick={handleLogin}
                type="button"
                disabled={isSubmitting}
              >
                Login
              </Button>
              <p className="text-sm text-gray-500">
                Username: `shivalingaswamigalu@2001` Password: `shivalingaswamigalu@2001`
              </p>
              {statusMessage ? <p className="text-sm font-medium text-[#ea580c]">{statusMessage}</p> : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 min-h-[70vh] bg-gradient-to-br from-[#fffaf2]/80 via-white/80 to-[#eef4ff]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-blue-100 bg-white p-6 shadow-lg lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#1e3a8a]">Admin Content Manager</h2>
            <p className="mt-2 text-gray-600">
              Edit faculty profiles, announcements, and all community section content without changing the public UI.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="button" variant="outline" onClick={handleReset}>
              <RefreshCcw className="h-4 w-4" />
              Reset Content
            </Button>
            <Button type="button" variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
            <Button type="button" className="bg-[#1e3a8a] hover:bg-[#1e40af]" onClick={handleSave} disabled={isSubmitting}>
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>

        {statusMessage ? <p className="mb-6 text-sm font-medium text-[#ea580c]">{statusMessage}</p> : null}

        <Tabs defaultValue="announcements" className="gap-6">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-2xl bg-white p-2 shadow-sm">
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="community-cards">Community Cards</TabsTrigger>
            <TabsTrigger value="parents">Parents</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="announcements">
            <div className="space-y-5">
              {draft.announcements.map((announcement) => (
                <SectionCard key={announcement.id} title={announcement.title || 'Announcement'}>
                  <div className="grid gap-4 lg:grid-cols-3">
                    <AdminField label="Title">
                      <Input value={announcement.title} onChange={(event) => updateAnnouncement(announcement.id, 'title', event.target.value)} />
                    </AdminField>
                    <AdminField label="Date">
                      <Input type="date" value={announcement.date} onChange={(event) => updateAnnouncement(announcement.id, 'date', event.target.value)} />
                    </AdminField>
                    <AdminField label="Tag">
                      <Input value={announcement.tag} onChange={(event) => updateAnnouncement(announcement.id, 'tag', event.target.value)} />
                    </AdminField>
                  </div>
                  <AdminField label="Message">
                    <Textarea value={announcement.message} onChange={(event) => updateAnnouncement(announcement.id, 'message', event.target.value)} />
                  </AdminField>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        announcements: current.announcements.filter((item) => item.id !== announcement.id),
                      }))
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove Announcement
                  </Button>
                </SectionCard>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  setDraft((current) => ({
                    ...current,
                    announcements: [
                      ...current.announcements,
                      {
                        id: `announcement-${Date.now()}`,
                        title: 'New Announcement',
                        date: new Date().toISOString().slice(0, 10),
                        tag: 'General',
                        message: 'Add announcement details here.',
                      },
                    ],
                  }))
                }
              >
                <Plus className="h-4 w-4" />
                Add Announcement
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="community-cards">
            <div className="space-y-5">
              {draft.community.groups.map((group) => (
                <SectionCard key={group.slug} title={`${group.title} Card`}>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <AdminField label="Title">
                      <Input value={group.title} onChange={(event) => updateCommunityGroup(group.slug, 'title', event.target.value)} />
                    </AdminField>
                    <AdminField label="Badge">
                      <Input value={group.badge} onChange={(event) => updateCommunityGroup(group.slug, 'badge', event.target.value)} />
                    </AdminField>
                  </div>
                  <AdminField label="Subtitle">
                    <Input value={group.subtitle} onChange={(event) => updateCommunityGroup(group.slug, 'subtitle', event.target.value)} />
                  </AdminField>
                  <AdminField label="Description">
                    <Textarea value={group.description} onChange={(event) => updateCommunityGroup(group.slug, 'description', event.target.value)} />
                  </AdminField>
                  <AdminField label="Image URL or stored data">
                    <Input value={group.image} onChange={(event) => updateCommunityGroup(group.slug, 'image', event.target.value)} />
                  </AdminField>
                  <div className="flex flex-wrap items-center gap-4">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-[#1e3a8a]">
                      <Upload className="h-4 w-4" />
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => replaceImageField((value) => updateCommunityGroup(group.slug, 'image', value), event)}
                      />
                    </label>
                    <img src={group.image} alt={group.title} className="h-20 w-28 rounded-lg object-cover shadow-sm" />
                  </div>
                </SectionCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="parents">
            <div className="space-y-5">
              {draft.community.parents.map((parent) => (
                <SectionCard key={parent.id} title={parent.name || 'Parent Entry'}>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <AdminField label="Name">
                      <Input value={parent.name} onChange={(event) => updateParents(parent.id, 'name', event.target.value)} />
                    </AdminField>
                    <AdminField label="Relation or Place">
                      <Input value={parent.relation} onChange={(event) => updateParents(parent.id, 'relation', event.target.value)} />
                    </AdminField>
                  </div>
                  <AdminField label="Image URL or stored data">
                    <Input value={parent.image} onChange={(event) => updateParents(parent.id, 'image', event.target.value)} />
                  </AdminField>
                  <div className="flex flex-wrap items-center gap-4">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-[#1e3a8a]">
                      <Upload className="h-4 w-4" />
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => replaceImageField((value) => updateParents(parent.id, 'image', value), event)}
                      />
                    </label>
                    <img src={parent.image} alt={parent.name} className="h-20 w-28 rounded-lg object-cover shadow-sm" />
                  </div>
                  <AdminField label="Quote">
                    <Textarea value={parent.quote} onChange={(event) => updateParents(parent.id, 'quote', event.target.value)} className="min-h-32" />
                  </AdminField>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        community: {
                          ...current.community,
                          parents: current.community.parents.filter((item) => item.id !== parent.id),
                        },
                      }))
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove Parent Entry
                  </Button>
                </SectionCard>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  setDraft((current) => ({
                    ...current,
                    community: {
                      ...current.community,
                      parents: [
                        ...current.community.parents,
                        {
                          id: `parent-${Date.now()}`,
                          name: 'New Parent',
                          relation: 'Belakavadi',
                          image: current.community.groups.find((group) => group.slug === 'parents')?.image || '',
                          quote: 'Add parent feedback here.',
                        },
                      ],
                    },
                  }))
                }
              >
                <Plus className="h-4 w-4" />
                Add Parent Entry
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="alumni">
            <div className="space-y-5">
              {draft.community.alumni.map((alumni) => (
                <SectionCard key={alumni.id} title={alumni.name || 'Alumni Entry'}>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <AdminField label="Name">
                      <Input value={alumni.name} onChange={(event) => updateAlumni(alumni.id, 'name', event.target.value)} />
                    </AdminField>
                    <AdminField label="Detail">
                      <Input value={alumni.detail} onChange={(event) => updateAlumni(alumni.id, 'detail', event.target.value)} />
                    </AdminField>
                  </div>
                  <AdminField label="Image URL or stored data">
                    <Input value={alumni.image} onChange={(event) => updateAlumni(alumni.id, 'image', event.target.value)} />
                  </AdminField>
                  <div className="flex flex-wrap items-center gap-4">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-[#1e3a8a]">
                      <Upload className="h-4 w-4" />
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => replaceImageField((value) => updateAlumni(alumni.id, 'image', value), event)}
                      />
                    </label>
                    <img src={alumni.image} alt={alumni.name} className="h-20 w-28 rounded-lg object-cover shadow-sm" />
                  </div>
                  <AdminField label="Quote">
                    <Textarea value={alumni.quote} onChange={(event) => updateAlumni(alumni.id, 'quote', event.target.value)} className="min-h-28" />
                  </AdminField>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        community: {
                          ...current.community,
                          alumni: current.community.alumni.filter((item) => item.id !== alumni.id),
                        },
                      }))
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove Alumni Entry
                  </Button>
                </SectionCard>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  setDraft((current) => ({
                    ...current,
                    community: {
                      ...current.community,
                      alumni: [
                        ...current.community.alumni,
                        {
                          id: `alumni-${Date.now()}`,
                          name: 'New Alumni',
                          detail: 'Batch • Profession',
                          image: current.community.groups.find((group) => group.slug === 'alumni')?.image || '',
                          quote: 'Add alumni message here.',
                        },
                      ],
                    },
                  }))
                }
              >
                <Plus className="h-4 w-4" />
                Add Alumni Entry
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="faculty">
            <div className="space-y-5">
              {draft.community.faculty.map((faculty) => (
                <SectionCard key={faculty.id} title={faculty.name || 'Faculty Member'}>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <AdminField label="Teacher Name">
                      <Input value={faculty.name} onChange={(event) => updateFaculty(faculty.id, 'name', event.target.value)} />
                    </AdminField>
                    <AdminField label="Phone">
                      <Input value={faculty.phone} onChange={(event) => updateFaculty(faculty.id, 'phone', event.target.value)} />
                    </AdminField>
                  </div>
                  <AdminField label="Qualification or Details">
                    <Input value={faculty.qualification} onChange={(event) => updateFaculty(faculty.id, 'qualification', event.target.value)} />
                  </AdminField>
                  <AdminField label="Photo URL or stored data">
                    <Input value={faculty.photo} onChange={(event) => updateFaculty(faculty.id, 'photo', event.target.value)} />
                  </AdminField>
                  <div className="flex flex-wrap items-center gap-4">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-[#1e3a8a]">
                      <Upload className="h-4 w-4" />
                      Upload Teacher Photo
                      <input type="file" accept="image/*" className="hidden" onChange={(event) => void replaceFacultyImage(faculty.id, event)} />
                    </label>
                    <img src={faculty.photo} alt={faculty.name} className="h-24 w-24 rounded-xl object-cover shadow-sm" />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        community: {
                          ...current.community,
                          faculty: current.community.faculty.filter((item) => item.id !== faculty.id),
                        },
                      }))
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove Teacher
                  </Button>
                </SectionCard>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  setDraft((current) => ({
                    ...current,
                    community: {
                      ...current.community,
                      faculty: [
                        ...current.community.faculty,
                        {
                          id: `faculty-${Date.now()}`,
                          name: 'New Teacher',
                          phone: 'Not provided',
                          qualification: 'Add qualification',
                          photo: current.community.groups.find((group) => group.slug === 'faculty')?.image || '',
                        },
                      ],
                    },
                  }))
                }
              >
                <Plus className="h-4 w-4" />
                Add Teacher
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="account">
            <SectionCard title="Admin Account">
              <p className="text-sm text-gray-600">
                Admin account changes now update the backend service, so use the backend as the source of truth.
              </p>
              <div className="grid gap-4 lg:grid-cols-2">
                <AdminField label="Username">
                  <Input
                    value={accountDraft.username}
                    onChange={(event) => setAccountDraft((current) => ({ ...current, username: event.target.value }))}
                  />
                </AdminField>
                <AdminField label="Password">
                  <Input
                    type="password"
                    value={accountDraft.password}
                    onChange={(event) => setAccountDraft((current) => ({ ...current, password: event.target.value }))}
                  />
                </AdminField>
              </div>
              <Button type="button" className="bg-[#1e3a8a] hover:bg-[#1e40af]" onClick={handleCredentialSave}>
                <Save className="h-4 w-4" />
                Save Admin Account
              </Button>
              <p className="text-sm text-gray-500">Current backend username: {credentials.username}</p>
            </SectionCard>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
