import { ArrowLeft, GraduationCap, Phone, Quote, Users } from 'lucide-react';
import { motion } from 'motion/react';
import type { CommunityContent, CommunityPageKey } from '../types/content';

const pageMeta = {
  parents: {
    title: 'Parents Section',
    subtitle: 'Parent voices and experiences with the school community',
    icon: Users,
  },
  alumni: {
    title: 'Alumni Section',
    subtitle: 'Former students sharing their memories and achievements',
    icon: GraduationCap,
  },
  faculty: {
    title: 'Faculty Section',
    subtitle: 'Meet our dedicated teachers and their qualifications',
    icon: Users,
  },
} as const;

type CommunityDetailPageProps = {
  pageKey: CommunityPageKey;
  community: CommunityContent;
};

export function CommunityDetailPage({ pageKey, community }: CommunityDetailPageProps) {
  const meta = pageMeta[pageKey];
  const Icon = meta.icon;

  return (
    <section className="pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-gradient-to-br from-[#fffaf2]/80 via-white/80 to-[#eef4ff]/80 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#1e3a8a] font-semibold hover:text-[#ea580c] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#1e3a8a] rounded-full mb-4">
            <Icon className="w-4 h-4" />
            <span className="font-semibold text-sm">{meta.title}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-3">{meta.title}</h2>
          <p className="text-gray-600 text-lg">{meta.subtitle}</p>
        </motion.div>

        {pageKey === 'parents' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {community.parents.map((parent, index) => (
              <motion.article
                key={parent.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-lg md:col-span-2 lg:col-span-3"
              >
                <div className="grid lg:grid-cols-[280px_1fr]">
                  <img src={parent.image} alt={parent.name} className="w-full h-56 sm:h-72 lg:h-full object-cover" />
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl font-bold text-[#1e3a8a]">{parent.name}</h3>
                    <p className="text-sm text-[#ea580c] font-semibold mb-3">{parent.relation}</p>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      <Quote className="inline w-4 h-4 mr-1 text-[#1e3a8a]" />
                      {parent.quote}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {pageKey === 'alumni' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {community.alumni.map((alumni, index) => (
              <motion.article
                key={alumni.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={alumni.image} alt={alumni.name} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a]">{alumni.name}</h3>
                  <p className="text-sm text-[#ea580c] font-semibold mb-3">{alumni.detail}</p>
                  <p className="text-gray-600 leading-relaxed">
                    <Quote className="inline w-4 h-4 mr-1 text-[#1e3a8a]" />
                    {alumni.quote}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {pageKey === 'faculty' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {community.faculty.map((faculty, index) => (
              <motion.article
                key={faculty.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="w-full h-72 bg-[#f7f9ff] p-2 flex items-center justify-center border-b border-blue-100">
                  <img src={faculty.photo} alt={faculty.name} className="w-full h-full object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{faculty.name}</h3>
                  <p className="text-gray-700 mb-2">{faculty.qualification}</p>
                  <p className="text-gray-700 inline-flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#1e3a8a]" />
                    {faculty.phone}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
