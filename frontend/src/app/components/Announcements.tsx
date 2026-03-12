import { Bell, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';
import type { Announcement } from '../types/content';

type AnnouncementsProps = {
  announcements: Announcement[];
};

export function Announcements({ announcements }: AnnouncementsProps) {
  if (!announcements.length) {
    return null;
  }

  return (
    <section id="announcements" className="py-16 lg:py-24 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">Recent Updates</h2>
          <p className="text-gray-600 text-lg">Latest announcements shared by the school administration</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {announcements.map((announcement, index) => (
            <motion.article
              key={announcement.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="h-full rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-[#fef9f3] p-6 shadow-lg"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1e3a8a]">
                  <Bell className="h-3.5 w-3.5" />
                  {announcement.tag}
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays className="h-4 w-4 text-[#ea580c]" />
                  {announcement.date}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{announcement.title}</h3>
              <p className="text-gray-600 leading-relaxed">{announcement.message}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
