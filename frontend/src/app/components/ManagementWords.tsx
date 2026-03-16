import { motion } from 'motion/react';

const managementImage = `${import.meta.env.BASE_URL}images/management.jpeg`;

export function ManagementWords() {
  return (
    <section id="management" className="py-16 lg:py-24 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">Management Words</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ea580c] to-[#fb923c] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl">
              <img src={managementImage} alt="Sri Shivalinga Swamiji" loading="lazy" className="w-full h-[360px] sm:h-[440px] object-cover" />
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#fffaf2] to-white border border-orange-100 rounded-2xl shadow-lg p-6 lg:p-8 text-gray-700 leading-relaxed space-y-4"
          >
            <p>
              It gives me immense happiness to witness the continued growth and progress of Adarsha Higher Primary
              School, Belakavadi, an institution dedicated to nurturing young minds with knowledge, discipline, and
              strong moral values. Education is not merely the acquisition of academic knowledge; it is the
              development of character, courage, and compassion that enables children to face life&apos;s challenges with
              confidence.
            </p>
            <p>
              The school has remained committed to empowering every child who walks through its doors by instilling
              strength of character, ethical values, and a sense of responsibility toward society. I am pleased to see
              the institution adapting to the changing world while preserving our rich cultural traditions and
              spiritual heritage. Teaching students to maintain a balance between tradition and modernity is essential
              for building responsible and grounded individuals.
            </p>
            <p>
              Adarsha HPS Belakavadi plays a vital role in providing quality education to children from rural and
              underprivileged backgrounds, ensuring that economic or social barriers never limit a child&apos;s potential.
              Along with academic excellence, the school emphasizes virtues such as trust, honesty, discipline,
              compassion, and service before self values that form the foundation of a meaningful and fulfilling life.
            </p>
            <p>
              I extend my heartfelt appreciation to the dedicated teachers and staff whose sincere efforts guide
              students toward knowledge, confidence, and moral excellence. Their commitment shapes not only successful
              students but also responsible citizens who contribute positively to society.
            </p>
            <p>
              May the institution continue to grow and serve society by shaping enlightened, ethical, and empowered
              individuals. I convey my blessings and best wishes to all students, teachers, parents, and well-wishers
              for continued success in all future endeavors.
            </p>
            <p className="font-semibold text-[#1e3a8a]">- Sri Shivalinga Swamiji</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

