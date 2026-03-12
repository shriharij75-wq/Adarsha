import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const schoolPhone = '917676489193';
  const mapLink = 'https://maps.app.goo.gl/ktN6UjGnAWgAU4wy6';
  const mapEmbedSrc =
    'https://www.google.com/maps?q=12.260445,77.119056&z=17&output=embed';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappText = [
      'New inquiry from school website:',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Message: ${formData.message}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${schoolPhone}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Get in touch with us for admissions and inquiries
          </p>
          <p className="text-gray-600 mt-2">
            ಪ್ರವೇಶ ಮತ್ತು ವಿಚಾರಣೆಗಳಿಗಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white to-[#fef9f3] rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Name / ಹೆಸರು
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Phone / ದೂರವಾಣಿ
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Message / ಸಂದೇಶ
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ea580c] to-[#fb923c] text-white px-6 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <span className="font-semibold">Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="bg-gradient-to-br from-white to-[#fef9f3] rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a8a] mb-2">Address</h4>
                  <p className="text-gray-700">
                    Adarsha Higher Primary School<br />
                    Belakavadi, Malavally Taluk<br />
                    Mandya District – 571417<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-white to-[#fef9f3] rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#ea580c] to-[#fb923c] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a8a] mb-2">Phone</h4>
                  <p className="text-gray-700">+91 76764 89193</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-white to-[#fef9f3] rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#16a34a] to-[#22c55e] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a8a] mb-2">Email</h4>
                  <p className="text-gray-700">ahpsbelakavadi@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-gradient-to-br from-white to-[#fef9f3] rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a8a] mb-2">School Timings</h4>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-700 text-sm mt-2 text-gray-500">
                    Sunday & Public Holidays: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[380px] lg:h-[500px]">
            <iframe
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            />
          </div>
          <div className="mt-4 text-left sm:text-right">
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#1e3a8a] hover:text-[#ea580c] font-semibold"
            >
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
