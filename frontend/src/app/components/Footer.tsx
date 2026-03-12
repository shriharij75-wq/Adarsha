import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1e293b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ea580c] to-[#fb923c] flex items-center justify-center">
                <span className="text-white text-xl font-bold">A</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Adarsha HPS</h3>
                <p className="text-sm text-gray-300">Belakavadi</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Empowering Rural Dreams Through Quality Education since 1987.
            </p>
            <p className="text-gray-300 text-sm">
              ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣದ ಮೂಲಕ ಗ್ರಾಮೀಣ ಕನಸುಗಳನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Academics', 'Announcements', 'Facilities', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link === 'Announcements' ? 'announcements' : link.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Belakavadi, Malavally Taluk,
                  <br />
                  Mandya District - 571417
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#ea580c] flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#ea580c] flex-shrink-0" />
                <span className="text-gray-300 text-sm">ahpsbelakavadi@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">Stay connected with our latest updates and events.</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              &copy; 2026 Adarsha Higher Primary School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => {
                  window.location.hash = '#/admin';
                }}
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Admin Login
              </button>
              <button className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
