import { GraduationCap, Calendar, BookOpen, Utensils } from 'lucide-react';
import { motion } from 'motion/react';

const academicInfo = [
  {
    icon: GraduationCap,
    title: 'Grades Offered',
    value: 'Pre-Primary to Grade 7',
    valueKn: 'ಪೂರ್ವ-ಪ್ರಾಥಮಿಕ ಕಿರಿಯರಿಂದ 7ನೇ ತರಗತಿ',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: BookOpen,
    title: 'Medium of Instruction',
    value: 'Kannada',
    valueKn: 'ಕನ್ನಡ ಮಾಧ್ಯಮ',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Calendar,
    title: 'Academic Session',
    value: 'Starts in April',
    valueKn: 'ಏಪ್ರಿಲ್‌ನಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Utensils,
    title: 'Mid-day Meal',
    value: 'Provided Daily',
    valueKn: 'ಪ್ರತಿದಿನ ಒದಗಿಸಲಾಗುತ್ತದೆ',
    color: 'from-purple-500 to-purple-600',
  },
];

export function Academics() {
  return (
    <section id="academics" className="py-16 lg:py-24 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">
            Academics
          </h2>
          <p className="text-gray-600 text-lg">
            Building a strong foundation for lifelong learning
          </p>
          <p className="text-gray-600 mt-2">
            ಜೀವಿತಾವಧಿಯ ಕಲಿಕೆಗಾಗಿ ಬಲವಾದ ಅಡಿಪಾಯವನ್ನು ನಿರ್ಮಿಸುವುದು
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {academicInfo.map((info, index) => {
            const Icon = info.icon;
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
                  {/* Background Gradient Blob */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${info.color} opacity-5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />
                  
                  {/* Icon */}
                  <div className={`relative bg-gradient-to-br ${info.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-600 mb-4">
                    {info.title}
                  </h3>
                  <p className="text-2xl font-bold text-[#1e3a8a] mb-3">
                    {info.value}
                  </p>
                  <p className="text-base text-gray-600 font-medium">
                    {info.valueKn}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-8 lg:p-12 text-white shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Holistic Education Approach
              </h3>
              <p className="text-lg mb-2">ಸಮಗ್ರ ಶಿಕ್ಷಣ ವಿಧಾನ</p>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Our curriculum focuses on comprehensive development, combining academic
                excellence with character building, cultural awareness, and community
                values. We ensure every student receives quality education in their
                mother tongue while preparing them for future challenges.
              </p>
              <p className="leading-relaxed text-sm opacity-90">
                ನಮ್ಮ ಪಠ್ಯಕ್ರಮವು ಶೈಕ್ಷಣಿಕ ಉತ್ಕೃಷ್ಟತೆ, ಪಾತ್ರ ನಿರ್ಮಾಣ, ಸಾಂಸ್ಕೃತಿಕ
                ಅರಿವು ಮತ್ತು ಸಮುದಾಯ ಮೌಲ್ಯಗಳೊಂದಿಗೆ ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯನ್ನು ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
