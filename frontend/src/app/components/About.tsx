import { useEffect, useRef, useState } from 'react';
import { School, Calendar, BookOpen, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { siteImages } from '../data/siteImages';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function Counter({ end, duration = 2, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-[#1e3a8a]">
      {count}
      {suffix}
    </div>
  );
}

export function About() {
  const stats = [
    { icon: Calendar, value: 38, suffix: '+', label: 'Years of Excellence' },
    { icon: School, value: 7, suffix: '', label: 'Classrooms' },
    { icon: BookOpen, value: 430, suffix: '', label: 'Library Books' },
    { icon: Users, value: 2, suffix: '', label: 'Functional Computers' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">
            About Adarsha HPS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ea580c] to-[#fb923c] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[280px] sm:h-[360px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={siteImages.about}
                alt="School Building"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border-l-4 border-[#ea580c]">
              <p className="text-[#1e3a8a] font-bold text-xl mb-1">Established</p>
              <p className="text-3xl sm:text-4xl font-bold text-[#ea580c]">1987</p>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-6">
              Nurturing Young Minds Since 1987
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Adarsha Higher Primary School, located in the rural heartland of
                Belakavadi, Malavally Taluk, Mandya District, has been a beacon of
                quality education for over three decades. As a Private Aided school,
                we are committed to providing accessible, inclusive, and empowering
                education to rural children.
              </p>
              
              <p>
                Our school serves students from <span className="font-semibold text-[#1e3a8a]">Pre-Primary to Grade 7</span>,
                delivering education in <span className="font-semibold text-[#1e3a8a]">Kannada medium</span>.
                With a focus on holistic development, we combine traditional values
                with modern teaching methodologies to prepare students for a
                brighter future.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-[#fef9f3] to-white p-4 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">School Type</p>
                  <p className="font-semibold text-[#1e3a8a]">Private Aided</p>
                </div>
                <div className="bg-gradient-to-br from-[#fef9f3] to-white p-4 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Location</p>
                  <p className="font-semibold text-[#1e3a8a]">Rural Area</p>
                </div>
                <div className="bg-gradient-to-br from-[#fef9f3] to-white p-4 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Medium</p>
                  <p className="font-semibold text-[#1e3a8a]">Kannada</p>
                </div>
                <div className="bg-gradient-to-br from-[#fef9f3] to-white p-4 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Session Starts</p>
                  <p className="font-semibold text-[#1e3a8a]">April</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#fef9f3] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 mt-2 text-sm lg:text-base">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

