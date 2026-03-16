import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { Announcements } from './components/Announcements';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { CoreValues } from './components/CoreValues';
import { ManagementWords } from './components/ManagementWords';
import { Facilities } from './components/Facilities';
import { Academics } from './components/Academics';
import { Community } from './components/Community';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommunityDetailPage } from './components/CommunityDetailPage';
import { AdminPage } from './components/AdminPage';
import { SeoContentPage } from './components/SeoContentPage';
import { useSiteContent } from './lib/siteContent';
import { buildSitePath, getSeoPageFromPath } from './lib/routing';
import type { CommunityPageKey } from './types/content';

function getCommunityPageFromHash(hash: string): CommunityPageKey | null {
  const match = hash.match(/^#\/community\/(parents|alumni|faculty)$/);
  return (match?.[1] as CommunityPageKey) ?? null;
}

function isAdminRoute(hash: string) {
  return hash === '#/admin';
}

export default function App() {
  const backgroundImageUrl = `${import.meta.env.BASE_URL}images/bg-image.png`;
  const seoPage = getSeoPageFromPath(window.location.pathname, import.meta.env.BASE_URL);
  const { content, setContent, resetContent } = useSiteContent();

  const [communityPage, setCommunityPage] = useState<CommunityPageKey | null>(() =>
    getCommunityPageFromHash(window.location.hash)
  );
  const [adminRoute, setAdminRoute] = useState(() => isAdminRoute(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setCommunityPage(getCommunityPageFromHash(window.location.hash));
      setAdminRoute(isAdminRoute(window.location.hash));
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const siteUrl = 'https://www.adarshabelakavadi.com';
    const pageMetadata = seoPage
      ? {
          title: {
            'about-school': 'About School | Adarsha Higher Primary School',
            admission: 'Admissions | Adarsha Higher Primary School',
            facilities: 'Facilities | Adarsha Higher Primary School',
            contact: 'Contact | Adarsha Higher Primary School',
          }[seoPage],
          description: {
            'about-school':
              'Learn about Adarsha Higher Primary School, a trusted school in Belakavadi serving families near Mandya with values-based education.',
            admission:
              'Admission information for Adarsha Higher Primary School in Belakavadi for parents searching for a primary school near Mandya.',
            facilities:
              'See the classrooms, library, smart class setup, amenities, and campus facilities at Adarsha Higher Primary School.',
            contact:
              'Contact Adarsha Higher Primary School in Belakavadi for admissions, enquiries, and campus visits.',
          }[seoPage],
          canonical: `${siteUrl}${buildSitePath(import.meta.env.BASE_URL, `/${seoPage}`)}`,
        }
      : {
          title: 'ADARSHA HIGHER PRIMARY SCHOOL',
          description:
            'Adarsha Higher Primary School in Belakavadi offers values-based primary education, school facilities, community life, and admission support for families near Mandya.',
          canonical: `${siteUrl}${buildSitePath(import.meta.env.BASE_URL, '/')}`,
        };

    document.title = pageMetadata.title;

    const ensureMeta = (name: string) => {
      let meta = document.head.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      return meta;
    };

    ensureMeta('description').setAttribute('content', pageMetadata.description);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageMetadata.canonical);
  }, [seoPage]);

  useEffect(() => {
    if (adminRoute) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (communityPage) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (seoPage) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const sectionId = window.location.hash.replace(/^#/, '');
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, [adminRoute, communityPage, seoPage]);

  return (
    <div
      className="min-h-screen bg-[#fef9f3] bg-top bg-[length:100%_auto] bg-repeat-y"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <Navbar />
      <main>
        {adminRoute ? (
          <AdminPage content={content} onSaveContent={setContent} onResetContent={resetContent} />
        ) : communityPage ? (
          <CommunityDetailPage pageKey={communityPage} community={content.community} />
        ) : seoPage ? (
          <SeoContentPage pageKey={seoPage} />
        ) : (
          <>
            <HeroCarousel />
            <ManagementWords />
            <Announcements announcements={content.announcements} />
            <About />
            <MissionVision />
            <CoreValues />
            <Facilities />
            <Academics />
            <Community groups={content.community.groups} />
            <Gallery />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
