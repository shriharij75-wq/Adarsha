import { useRef } from 'react';
import Slider from 'react-slick';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { siteImages } from '../data/siteImages';

const carouselSlides = [
  {
    image: siteImages.hero.schoolBuilding,
    title: 'Welcome to ADARSHA HIGHER PRIMARY SCHOOL',
    subtitle: 'Empowering Rural Dreams Through Quality Education',
    description: 'Established in 1987',
  },
  {
    image: siteImages.hero.smartClassroom,
    title: 'Smart Classroom Learning',
    subtitle: 'Modern Education in Rural Setting',
    description: 'Technology-enabled classrooms',
  },
  {
    image: siteImages.hero.playground,
    title: 'Playground & Sports',
    subtitle: 'Building Strong Minds & Bodies',
    description: 'Holistic development for every child',
  },
  {
    image: siteImages.hero.janmashtami,
    title: 'Cultural Celebrations',
    subtitle: 'Krishna Janmashtami Festival',
    description: 'Celebrating our rich heritage',
  },
  {
    image: siteImages.hero.republicDay,
    title: 'Republic Day Celebration',
    subtitle: 'Instilling Patriotism & Values',
    description: 'Proud citizens of India',
  },
  {
    image: siteImages.hero.parentPartnership,
    title: 'Parent Partnership',
    subtitle: 'Together We Grow',
    description: 'Building a strong community',
  },
];

export function HeroCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    arrows: true,
  };

  const schoolMapUrl = 'https://maps.app.goo.gl/ktN6UjGnAWgAU4wy6';

  const openSchoolLocation = () => {
    window.open(schoolMapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative mt-16 sm:mt-20 lg:mt-24">
      <Slider ref={sliderRef} {...settings} className="hero-carousel">
        {carouselSlides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="relative h-[52vh] sm:h-[68vh] lg:h-[85vh] overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              
              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-xl lg:max-w-2xl text-white"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-[#ea580c] text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-4"
                  >
                    {slide.description}
                  </motion.p>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-6 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-base sm:text-xl lg:text-2xl mb-5 sm:mb-8 text-gray-200"
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex"
                    >
                      <button
                        onClick={openSchoolLocation}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#1e3a8a] rounded-xl border border-white/70 hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span className="font-semibold">Directions to School</span>
                        <MapPin className="w-5 h-5" />
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
