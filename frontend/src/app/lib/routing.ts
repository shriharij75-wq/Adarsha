export type SeoPageKey = 'about-school' | 'admission' | 'facilities' | 'contact';

export function buildSitePath(baseUrl: string, path = '/') {
  const normalizedBase = baseUrl === '/' ? '' : baseUrl.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}` || '/';
}

export function buildHomeHashUrl(baseUrl: string, sectionId?: string) {
  const homePath = buildSitePath(baseUrl, '/');
  if (!sectionId || sectionId === 'home') {
    return homePath;
  }

  return `${homePath}#${sectionId}`;
}

export function getSeoPageFromPath(pathname: string, baseUrl: string): SeoPageKey | null {
  const basePrefix = baseUrl === '/' ? '' : baseUrl.replace(/\/$/, '');
  const pathWithoutBase =
    basePrefix && pathname.startsWith(basePrefix) ? pathname.slice(basePrefix.length) || '/' : pathname;
  const normalizedPath = pathWithoutBase.replace(/\/$/, '') || '/';

  switch (normalizedPath) {
    case '/about-school':
      return 'about-school';
    case '/admission':
      return 'admission';
    case '/facilities':
      return 'facilities';
    case '/contact':
      return 'contact';
    default:
      return null;
  }
}
