import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteImages } from '../data/siteImages';

interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, url: siteImages.gallery.schoolBuilding, category: 'Building', title: 'School Building' },
  { id: 2, url: siteImages.gallery.smartClassroom, category: 'Smart Class', title: 'Smart Classroom' },
  { id: 3, url: siteImages.gallery.playgroundArea, category: 'Playground', title: 'Playground Area' },
  { id: 4, url: siteImages.gallery.janmashtamiCelebration, category: 'Krishna Janmashtami', title: 'Janmashtami Celebration' },
  { id: 5, url: siteImages.gallery.republicDay, category: 'Republic Day', title: 'Republic Day' },
  { id: 6, url: siteImages.gallery.kannadaRajyotsava, category: 'Kannada Rajyotsava', title: 'Kannada Rajyotsava' },
  { id: 7, url: siteImages.gallery.parentTeacherMeeting, category: 'Parents Meeting', title: 'Parent-Teacher Meeting' },
  { id: 8, url: siteImages.gallery.sportsDay, category: 'Sports Day', title: 'Sports Day Activities' },
  { id: 9, url: siteImages.gallery.annualFunction, category: 'Annual Functions', title: 'Annual Function' },
  { id: 10, url: siteImages.gallery.library, category: 'Building', title: 'Library' },
  { id: 11, url: siteImages.gallery.studentsLearning, category: 'Smart Class', title: 'Students Learning' },
  { id: 12, url: siteImages.gallery.studentPerformance, category: 'Annual Functions', title: 'Student Performance' },
];

const categories = ['All', 'Building', 'Smart Class', 'Playground', 'Krishna Janmashtami', 'Republic Day', 'Kannada Rajyotsava', 'Parents Meeting', 'Sports Day', 'Annual Functions'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gradient-to-br from-[#fef9f3]/80 to-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">
            Photo Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Glimpses of life at Adarsha HPS
          </p>
          <p className="text-gray-600 mt-2">
            ಆದರ್ಶ ಹಿ.ಪ್ರಾ.ಶಾಲೆಯಲ್ಲಿನ ಜೀವನದ ನೋಟಗಳು
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="1rem" className="masonry-gallery">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setLightboxImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-bold text-lg">{image.title}</p>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
                  <p className="text-gray-300">{lightboxImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .masonry-gallery {
            column-count: 1 !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .masonry-gallery {
            column-count: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}

