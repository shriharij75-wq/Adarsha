import { useState, useEffect } from 'react';
import { Menu, X, Mail, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteImages } from '../data/siteImages';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'kn'>('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigateToSection = (id: string) => {
    const isSpecialPage =
      window.location.hash.startsWith('#/community/') || window.location.hash === '#/admin';

    if (isSpecialPage) {
      window.location.hash = id === 'home' ? '#home' : `#${id}`;
      setIsMobileMenuOpen(false);
      return;
    }

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }

    scrollToSection(id);
  };

  const goHome = () => {
    setIsMobileMenuOpen(false);
    if (window.location.hash.startsWith('#/community/') || window.location.hash === '#/admin') {
      window.location.hash = '#home';
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToAdmin = () => {
    window.location.hash = '#/admin';
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: language === 'en' ? 'Home' : 'ಮುಖಪುಟ', id: 'home' },
    { label: language === 'en' ? 'About' : 'ನಮ್ಮ ಬಗ್ಗೆ', id: 'about' },
    { label: language === 'en' ? 'Academics' : 'ಶೈಕ್ಷಣಿಕ', id: 'academics' },
    { label: language === 'en' ? 'Facilities' : 'ಸೌಲಭ್ಯಗಳು', id: 'facilities' },
    { label: language === 'en' ? 'Community' : 'ಸಮುದಾಯ', id: 'community' },
    { label: language === 'en' ? 'Management' : 'ನಿರ್ವಹಣೆ', id: 'management' },
    { label: language === 'en' ? 'Updates' : 'ನವೀಕರಣಗಳು', id: 'announcements' },
    { label: language === 'en' ? 'Gallery' : 'ಗ್ಯಾಲರಿ', id: 'gallery' },
    { label: language === 'en' ? 'Contact' : 'ಸಂಪರ್ಕಿಸಿ', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80' : 'bg-white/85 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-[6.25rem] sm:h-[7.25rem] lg:h-[7.25rem]">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 2xl:flex-[0_0_22rem] pr-2">
            <button
              onClick={goHome}
              className="w-[5.25rem] h-[5.25rem] sm:w-[6.25rem] sm:h-[6.25rem] lg:w-[6rem] lg:h-[6rem] rounded-xl border border-blue-100 p-1 shrink-0 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a]/40"
              aria-label="Go to home page"
            >
              <img
                src={siteImages.logo}
                alt="Adarsha Higher Primary School logo"
                className="w-full h-full rounded-lg object-contain"
              />
            </button>
            <div className="flex flex-col min-w-0">
              <h1 className="text-[#1e3a8a] text-xs sm:text-base lg:text-sm xl:text-base 2xl:text-[1rem] font-bold leading-tight">
                {language === 'en' ? 'ADARSHA HIGHER PRIMARY SCHOOL' : 'ಆದರ್ಶ ಹಿ.ಪ್ರಾ.ಶಾಲೆ'}
              </h1>
              <p className="text-gray-600 text-[11px] sm:text-sm lg:text-sm">
                {language === 'en' ? 'Belakavadi' : 'ಬೆಳವಾಡಿ'}
              </p>
            </div>
          </div>

          <div className="hidden 2xl:flex items-center justify-center gap-2.5 flex-1 px-2 min-w-0">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateToSection(link.id)}
                className="text-[0.86rem] text-gray-700 hover:text-[#1e3a8a] transition-colors duration-300 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ea580c] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden 2xl:flex items-center gap-2 2xl:flex-[0_0_auto] pl-1">
            <div className="flex items-center gap-2">
              <div className="h-[6.2rem] w-[4.45rem] rounded-[999px] overflow-hidden border border-blue-100 shadow-sm bg-white/80">
                <img src={siteImages.swamiji.one} alt="Swamiji 1" className="h-full w-full object-cover" />
              </div>
              <div className="h-[6.2rem] w-[4.45rem] rounded-[999px] overflow-hidden border border-blue-100 shadow-sm bg-white/80">
                <img src={siteImages.swamiji.two} alt="Swamiji 2" className="h-full w-full object-cover" />
              </div>
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[#1e3a8a]/20 bg-white text-[#1e3a8a] text-xs hover:bg-[#f8fafc] transition-colors duration-300 shrink-0"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
            </button>
          </div>

          <div className="2xl:hidden flex items-center gap-1.5">
            <button
              onClick={goToAdmin}
              className="px-2.5 py-1.5 rounded-full border border-[#1e3a8a]/20 bg-white text-[#1e3a8a] text-xs"
            >
              Admin
            </button>
            <button
              onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#1e3a8a]/20 bg-white text-[#1e3a8a] text-xs"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'en' ? 'ಕನ್ನಡ' : 'EN'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1e3a8a]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1e3a8a]" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="2xl:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateToSection(link.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <div className="flex items-center gap-2 px-4 py-2">
                  <img src={siteImages.swamiji.one} alt="Swamiji 1" className="w-20 h-20 object-contain" />
                  <img src={siteImages.swamiji.two} alt="Swamiji 2" className="w-20 h-20 object-contain" />
                </div>
                <button
                  onClick={goToAdmin}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Admin Login
                </button>
                <a
                  href="mailto:ahpsbelakavadi@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#ea580c] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">ahpsbelakavadi@gmail.com</span>
                </a>
                <a
                  href="tel:+917676489193"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#ea580c] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 76764 89193</span>
                </a>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1e3a8a]/20 bg-white text-[#1e3a8a] hover:bg-[#f8fafc] transition-colors duration-300"
                >
                  <Globe className="w-4 h-4" />
                  {language === 'en' ? 'Switch to ಕನ್ನಡ' : 'Switch to English'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
