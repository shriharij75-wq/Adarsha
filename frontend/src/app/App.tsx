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
import { useSiteContent } from './lib/siteContent';
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
    if (adminRoute) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (communityPage) {
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
  }, [adminRoute, communityPage]);

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
