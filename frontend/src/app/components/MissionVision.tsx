import { Target, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export function MissionVision() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#fef9f3]/80 to-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ನಮ್ಮ ಧ್ಯೇಯ ಮತ್ತು ದೃಷ್ಟಿ
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Gradient Background */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ea580c] to-[#fb923c]" />
              
              <div className="p-8 lg:p-10">
                {/* Icon */}
                <div className="bg-gradient-to-br from-[#ea580c] to-[#fb923c] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                
                {/* English Content */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower rural students with quality education, nurturing their
                    intellectual, emotional, and physical growth. We strive to create
                    an inclusive learning environment that values compassion, integrity,
                    and community service, preparing students to become responsible
                    citizens and lifelong learners.
                  </p>
                </div>
                
                {/* Kannada Content */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1e3a8a] mb-4">
                    ನಮ್ಮ ಧ್ಯೇಯ
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ನೀಡುವುದು, ಅವರ ಬೌದ್ಧಿಕ,
                    ಭಾವನಾತ್ಮಕ ಮತ್ತು ದೈಹಿಕ ಬೆಳವಣಿಗೆಯನ್ನು ಪೋಷಿಸುವುದು. ಕರುಣೆ, ಸಚ್ಚಾರಿತ್ರ್ಯ
                    ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಯನ್ನು ಗೌರವಿಸುವ ಅಂತರ್ಗತ ಕಲಿಕೆಯ ವಾತಾವರಣವನ್ನು
                    ಸೃಷ್ಟಿಸುವುದು.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Gradient Background */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]" />
              
              <div className="p-8 lg:p-10">
                {/* Icon */}
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                
                {/* English Content */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be a leading institution in rural education, recognized for
                    academic excellence, character building, and community engagement.
                    We envision a future where every child from our school becomes a
                    confident, skilled, and compassionate individual contributing
                    positively to society.
                  </p>
                </div>
                
                {/* Kannada Content */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1e3a8a] mb-4">
                    ನಮ್ಮ ದೃಷ್ಟಿ
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    ಶೈಕ್ಷಣಿಕ ಉತ್ಕೃಷ್ಟತೆ, ಪಾತ್ರ ನಿರ್ಮಾಣ ಮತ್ತು ಸಮುದಾಯ ಭಾಗವಹಿಸುವಿಕೆಗಾಗಿ
                    ಗುರುತಿಸಲ್ಪಟ್ಟ ಗ್ರಾಮೀಣ ಶಿಕ್ಷಣದಲ್ಲಿ ಪ್ರಮುಖ ಸಂಸ್ಥೆಯಾಗುವುದು. ನಮ್ಮ ಶಾಲೆಯ
                    ಪ್ರತಿಯೊಬ್ಬ ಮಗುವೂ ಸಮಾಜಕ್ಕೆ ಧನಾತ್ಮಕವಾಗಿ ಕೊಡುಗೆ ನೀಡುವ ಆತ್ಮವಿಶ್ವಾಸ,
                    ಕೌಶಲ್ಯ ಮತ್ತು ಸಹಾನುಭೂತಿಯುಳ್ಳ ವ್ಯಕ್ತಿಯಾಗುವ ಭವಿಷ್ಯವನ್ನು ನಾವು
                    ದೃಷ್ಟಿಸುತ್ತೇವೆ.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
