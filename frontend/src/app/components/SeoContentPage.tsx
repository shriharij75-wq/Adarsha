import { ArrowLeft, BadgeCheck, BookOpen, Building2, CalendarDays, GraduationCap, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import type { SeoPageKey } from '../lib/routing';
import { buildHomeHashUrl } from '../lib/routing';

type SeoPageContent = {
  title: string;
  description: string;
  eyebrow: string;
  ctaHref: string;
  ctaLabel: string;
  highlights: string[];
  body: string[];
};

const seoPages: Record<SeoPageKey, SeoPageContent> = {
  'about-school': {
    title: 'About Adarsha Higher Primary School',
    description:
      'Learn why Adarsha Higher Primary School is known by many families as a trusted primary school near Mandya and a strong learning community in Belakavadi.',
    eyebrow: 'Best school in Belakavadi',
    ctaHref: '#contact',
    ctaLabel: 'Contact the school',
    highlights: ['Established in 1987', 'Kannada-medium rural learning environment', 'Holistic development from pre-primary to Grade 7'],
    body: [
      'Adarsha Higher Primary School has served families in Belakavadi for decades with a clear mission: deliver dependable, values-based education to children in a rural setting without compromising on quality. Parents looking for the best school in Belakavadi often want a place where children are known personally, guided with discipline, and encouraged to grow with confidence. That is the role our school has continued to play since 1987. Located in the Malavally Taluk of Mandya district, the school supports young learners with a balanced academic foundation, community connection, and a safe campus culture that helps every child feel supported from the first day onward.',
      'As a primary school near Mandya serving Belakavadi and surrounding villages, Adarsha Higher Primary School focuses on both academics and character formation. Students learn in a Kannada-medium environment that respects local identity while preparing them for the wider world. Teachers emphasize reading, writing, numeracy, participation, and good habits in daily life. The school also encourages curiosity, cleanliness, teamwork, and respect for elders, teachers, and classmates. This combination matters for parents who want more than marks alone. They want children to become capable, responsible, and socially aware, and that is built through consistent attention inside and outside the classroom.',
      'The school experience is strengthened by close relationships between educators, parents, and the larger community. Events, celebrations, and regular interaction help create a sense of belonging that is especially valuable in primary education. Families searching online for a trusted school in Belakavadi or a strong higher primary school near Mandya need clear information about commitment, continuity, and local understanding. Adarsha Higher Primary School stands out because it brings those qualities together. It is not only a place where children attend classes, but a place where they begin shaping their future with guidance, discipline, and encouragement in an environment rooted in service.'
    ],
  },
  admission: {
    title: 'Admissions at Adarsha Higher Primary School',
    description:
      'Find admission information for Adarsha Higher Primary School, a primary school near Mandya welcoming families from Belakavadi and nearby communities.',
    eyebrow: 'Admissions open for Belakavadi families',
    ctaHref: '#contact',
    ctaLabel: 'Ask about admission',
    highlights: ['Admissions for pre-primary to Grade 7', 'Guidance for local families', 'Accessible private aided school environment'],
    body: [
      'Admissions at Adarsha Higher Primary School are designed to be straightforward, supportive, and family-friendly. Many parents searching for the best school in Belakavadi want clear answers about eligibility, classroom environment, and the overall quality of education before they make a decision. Our school welcomes inquiries from families in Belakavadi, Malavally Taluk, Mandya district, and nearby villages who want a disciplined and caring learning environment for their children. Because the early years of education shape confidence and learning habits, the admission process is treated as the beginning of a long-term partnership between the school and the parent community.',
      'The school serves children from pre-primary through Grade 7 and is especially suitable for families seeking a dependable primary school near Mandya with strong local roots. During admission discussions, parents can learn about the Kannada-medium academic structure, school timings, available facilities, and the values-based atmosphere maintained across the campus. Teachers and school leadership focus on helping children transition smoothly into classroom life, whether they are joining at the entry level or moving from another school. Parents are encouraged to share each child’s learning needs and background so the school can provide better support from the beginning.',
      'For families comparing options, the advantage of Adarsha Higher Primary School lies in its combination of accessibility, personal attention, and community trust. Parents often look for a school where communication is direct, discipline is maintained, and children are guided with patience. Our admission process supports that expectation by inviting families to connect with the school, visit the campus, and ask practical questions before enrollment. If you are looking for admissions in Belakavadi or a reliable school near Mandya that values both academic progress and character development, Adarsha Higher Primary School is ready to help you take the next step with confidence.'
    ],
  },
  facilities: {
    title: 'Facilities at Adarsha Higher Primary School',
    description:
      'Explore the learning facilities at Adarsha Higher Primary School, including classrooms, library access, smart class resources, student amenities, and playground space.',
    eyebrow: 'Facilities for strong everyday learning',
    ctaHref: '#facilities',
    ctaLabel: 'See campus facilities',
    highlights: ['Well-ventilated classrooms', 'Library, smart class, and computers', 'Playground, drinking water, and student amenities'],
    body: [
      'Parents searching for the best school in Belakavadi often want proof that the campus supports real learning every day. At Adarsha Higher Primary School, facilities are planned around the needs of children in the primary and higher primary years. The school provides classrooms that are practical, organized, and suited to regular academic instruction. Students also benefit from access to a library, a smart class environment, basic computer resources, drinking water, sanitation facilities, and a playground that supports physical development. These facilities help create a complete school experience rather than limiting children to textbook learning alone.',
      'For families looking for a primary school near Mandya, school infrastructure matters because it directly affects concentration, safety, and student engagement. Our classroom spaces are designed to support attentive learning, while the library encourages reading habits and curiosity. The smart class setup and computer access help children become familiar with modern learning tools from an early stage. Alongside this, practical amenities such as electricity, separate toilets, secure campus fencing, and daily meal support contribute to a stable school routine. These details may seem simple, but they are exactly what parents consider when choosing a school where children can learn comfortably and consistently.',
      'Facilities at Adarsha Higher Primary School are not presented as decoration; they are part of the school’s commitment to giving rural students a fair and dignified learning environment. A good school in Belakavadi must combine academic seriousness with usable infrastructure that serves children throughout the day. That is what families find here: a campus that supports teaching, reading, participation, hygiene, safety, and play. When parents evaluate schools near Mandya, they often ask whether the environment will help children feel confident and ready to learn. Our facilities are built to answer that question positively, with practical support for both educational progress and everyday student well-being.'
    ],
  },
  contact: {
    title: 'Contact Adarsha Higher Primary School',
    description:
      'Contact Adarsha Higher Primary School in Belakavadi for admission enquiries, campus visits, and information about this primary school near Mandya.',
    eyebrow: 'Primary school near Mandya',
    ctaHref: '#contact',
    ctaLabel: 'Send an enquiry',
    highlights: ['Belakavadi, Malavally Taluk, Mandya district', 'Call for admission guidance', 'Visit the campus and speak with the school'],
    body: [
      'Parents who are comparing schools usually reach a point where they need direct answers, not just general information. The contact page for Adarsha Higher Primary School is meant to help families in Belakavadi and nearby areas take that next step easily. If you are searching for the best school in Belakavadi or a dependable primary school near Mandya, speaking with the school directly can help you understand admissions, timings, facilities, and the overall atmosphere more clearly. A direct conversation also helps parents judge whether the school’s values and expectations match what they want for their child.',
      'Adarsha Higher Primary School is located in Belakavadi, Malavally Taluk, Mandya district, Karnataka, making it accessible for families from the surrounding rural communities. Parents can contact the school for admission-related discussions, school visit planning, and questions about classes from pre-primary to Grade 7. This is especially useful for families who want to understand the Kannada-medium learning environment, available support, and everyday school operations before enrolling their children. Contacting the school is also the best way to confirm practical details such as timings, communication channels, and the process for new student entry.',
      'For local search visibility, clear and accurate contact information is essential, but it is even more important for parents who are making a serious decision. A school website should do more than look attractive; it should make it easy for families to connect with the institution. That is why Adarsha Higher Primary School highlights its location, phone support, and inquiry options for parents seeking a trusted school near Mandya. Whether you want to ask about admissions, meet the school team, or understand the facilities in person, reaching out directly is the fastest way to evaluate if this is the right school for your child.'
    ],
  },
};

const pageIcons = {
  'about-school': Building2,
  admission: GraduationCap,
  facilities: BookOpen,
  contact: Phone,
} as const;

type SeoContentPageProps = {
  pageKey: SeoPageKey;
};

export function SeoContentPage({ pageKey }: SeoContentPageProps) {
  const page = seoPages[pageKey];
  const Icon = pageIcons[pageKey];
  const homeUrl = buildHomeHashUrl(import.meta.env.BASE_URL);
  const ctaUrl = buildHomeHashUrl(import.meta.env.BASE_URL, page.ctaHref.replace(/^#/, ''));

  return (
    <section className="pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-gradient-to-br from-[#fffaf2]/80 via-white/90 to-[#eef4ff]/80 min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href={homeUrl}
          className="inline-flex items-center gap-2 text-[#1e3a8a] font-semibold hover:text-[#ea580c] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-[#dbe7ff] bg-white/95 shadow-[0_24px_80px_rgba(30,58,138,0.12)] overflow-hidden"
        >
          <div className="bg-[radial-gradient(circle_at_top_left,_rgba(234,88,12,0.14),_transparent_34%),linear-gradient(135deg,_rgba(30,58,138,0.08),_rgba(255,255,255,0.95))] px-6 py-8 sm:px-8 lg:px-12 lg:py-10 border-b border-[#e7eefb]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1e3a8a] shadow-sm">
              <Icon className="w-4 h-4" />
              {page.eyebrow}
            </div>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1e3a8a]">{page.title}</h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg leading-8 text-slate-700">{page.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {page.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d7e2fb] bg-white px-4 py-2 text-sm text-slate-700"
                >
                  <BadgeCheck className="w-4 h-4 text-[#ea580c]" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_17rem]">
              <div className="space-y-6 text-slate-700 leading-8 text-[1.02rem]">
                {page.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <aside className="h-fit rounded-3xl border border-[#e7eefb] bg-[#f8fbff] p-6 shadow-sm">
                <h2 className="text-lg font-bold text-[#1e3a8a]">Visit or enquire</h2>
                <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-[#ea580c]" />
                    <span>Belakavadi, Malavally Taluk, Mandya District, Karnataka 571417</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-[#ea580c]" />
                    <span>+91 76764 89193</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-4 w-4 text-[#ea580c]" />
                    <span>Monday to Friday 9:00 AM to 4:00 PM, Saturday 9:00 AM to 1:00 PM</span>
                  </div>
                </div>
                <a
                  href={ctaUrl}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {page.ctaLabel}
                </a>
              </aside>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
