import { School, User, BookOpen, Wifi, Utensils, Droplet, Zap, Home } from 'lucide-react';
import { motion } from 'motion/react';
import { siteImages } from '../data/siteImages';

const facilities = [
  {
    icon: School,
    title: '7 Classrooms',
    titleKn: '7 ತರಗತಿ ಕೊಠಡಿಗಳು',
    description: 'Well-ventilated and spacious learning spaces',
    image: siteImages.facilities.classrooms,
  },
  {
    icon: User,
    title: 'Headmaster Room',
    titleKn: 'ಮುಖ್ಯೋಪಾಧ್ಯಾಯರ ಕೊಠಡಿ',
    description: 'Administrative office for school management',
    image: siteImages.facilities.headmasterRoom,
  },
  {
    icon: BookOpen,
    title: 'Library (430 Books)',
    titleKn: 'ಗ್ರಂಥಾಲಯ (430 ಪುಸ್ತಕಗಳು)',
    description: 'Rich collection of books for all age groups',
    image: siteImages.facilities.library,
  },
  {
    icon: Wifi,
    title: 'Smart Class',
    titleKn: 'ಸ್ಮಾರ್ಟ್ ತರಗತಿ',
    description: 'Technology-enabled digital learning environment',
    image: siteImages.facilities.smartClass,
  },
  {
    icon: School,
    title: '2 Computers',
    titleKn: '2 ಕಂಪ್ಯೂಟರ್‌ಗಳು',
    description: 'Functional computers for basic digital literacy',
    image: siteImages.facilities.computers,
  },
  {
    icon: School,
    title: 'Playground',
    titleKn: 'ಆಟದ ಮೈದಾನ',
    description: 'Open space for sports and physical activities',
    image: siteImages.facilities.playground,
  },
  {
    icon: Droplet,
    title: 'Drinking Water',
    titleKn: 'ಕುಡಿಯುವ ನೀರು',
    description: 'Hand pump for clean drinking water',
    image: siteImages.facilities.drinkingWater,
  },
  {
    icon: Zap,
    title: 'Electricity',
    titleKn: 'ವಿದ್ಯುತ್',
    description: 'Continuous power supply for all facilities',
    image: siteImages.facilities.electricity,
  },
  {
    icon: School,
    title: 'Boys & Girls Toilets',
    titleKn: 'ಶೌಚಾಲಯಗಳು',
    description: 'Separate sanitation facilities with proper hygiene',
    image: siteImages.facilities.toilets,
  },
  {
    icon: Home,
    title: 'Barbed Wire Fencing',
    titleKn: 'ಬೇಲಿ ವ್ಯವಸ್ಥೆ',
    description: 'Secure boundary for student safety',
    image: siteImages.facilities.fencing,
  },
  {
    icon: Utensils,
    title: 'Mid-day Meal',
    titleKn: 'ಮಧ್ಯಾಹ್ನ ಊಟ',
    description: 'Nutritious meals provided daily to all students',
    image: siteImages.facilities.middayMeal,
  },
  {
    icon: Home,
    title: 'Private Building',
    titleKn: 'ಖಾಸಗಿ ಕಟ್ಟಡ',
    description: 'Well-maintained school infrastructure',
    image: siteImages.facilities.privateBuilding,
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-16 lg:py-24 bg-gradient-to-br from-white/80 to-[#fef9f3]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">
            School Facilities
          </h2>
          <p className="text-gray-600 text-lg">
            Modern amenities for comprehensive learning
          </p>
          <p className="text-gray-600 mt-2">
            ಸಮಗ್ರ ಕಲಿಕೆಗಾಗಿ ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳು
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-[#1e3a8a]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#1e3a8a] mb-1">
                      {facility.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 font-medium">
                      {facility.titleKn}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
