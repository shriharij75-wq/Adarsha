import { Heart, Scale, Shield, Users, Award, HandHeart } from 'lucide-react';
import { motion } from 'motion/react';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    titleKn: 'ಕರುಣೆ',
    description: 'Fostering empathy and kindness in every interaction',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Scale,
    title: 'Equity',
    titleKn: 'ಸಮಾನತೆ',
    description: 'Ensuring equal opportunities for all students',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Integrity',
    titleKn: 'ಸಚ್ಚಾರಿತ್ರ್ಯ',
    description: 'Building character through honesty and ethics',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Community',
    titleKn: 'ಸಮುದಾಯ',
    description: 'Strengthening bonds within our school family',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: Award,
    title: 'Excellence',
    titleKn: 'ಉತ್ಕೃಷ್ಟತೆ',
    description: 'Striving for the highest standards in education',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: HandHeart,
    title: 'Service',
    titleKn: 'ಸೇವೆ',
    description: 'Encouraging students to give back to society',
    gradient: 'from-teal-500 to-cyan-500',
  },
];

export function CoreValues() {
  return (
    <section className="py-16 lg:py-24 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-lg">
            The principles that guide our educational journey
          </p>
          <p className="text-gray-600 mt-2">
            ನಮ್ಮ ಶೈಕ್ಷಣಿಕ ಪ್ರಯಾಣಕ್ಕೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುವ ತತ್ವಗಳು
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-[#fef9f3] rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  {/* Decorative Background Circle */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" 
                       style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                  
                  {/* Icon */}
                  <div className={`relative bg-gradient-to-br ${value.gradient} w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1e3a8a] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 font-medium">
                    {value.titleKn}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
