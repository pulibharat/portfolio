'use client';

import { motion } from 'framer-motion';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Aspire Leaders Program',
      organization: 'HBS & Aspire Institute',
      type: 'Leadership',
      date: 'Oct 2025',
      logo: '/aspire_leaders_program_logo.jpg',
      description: 'Global Finalist selected from 45,228 applicants, participating in global leadership development and cross-cultural collaboration.',
    },
    {
      id: 2,
      title: 'Mentorship Program',
      organization: 'Global Mentorship Initiative',
      type: 'Professional',
      date: '2025',
      logo: '/gmi_logo.png',
      description: 'Selected for the 2025 cohort, receiving structured mentorship for professional growth and career development in technology.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {achievements.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative h-full"
        >
          <div className="glass p-12 rounded-[3.5rem] h-full hover-glow flex flex-col items-start transition-all duration-700">
            <div className="flex justify-between items-start w-full mb-10">
              <div className="w-20 h-20 bg-white rounded-3xl p-4 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-accent transition-all duration-500">
                <img src={item.logo} alt={item.organization} className="w-full h-full object-contain" />
              </div>
              <span className="px-6 py-2 glass rounded-full text-[10px] font-bold text-black group-hover:text-black transition-colors uppercase tracking-[0.2em]">
                {item.date}
              </span>
            </div>
            
            <div className="space-y-6 mb-12 flex-grow">
               <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight group-hover:text-gradient transition-all duration-500">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-sm font-bold uppercase tracking-[0.2em] text-accent">
                    {item.organization}
                  </p>
               </div>
              <p className="text-secondary text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity italic">
                "{item.description}"
              </p>
            </div>
            
            <div className="flex items-center justify-between w-full pt-8 border-t border-white/5 mt-auto">
               <span className="px-5 py-2 glass rounded-full text-[10px] font-bold text-accent group-hover:bg-accent group-hover:text-white transition-all uppercase tracking-widest">
                {item.type}
              </span>
              <div className="opacity-0 group-hover:opacity-10 transition-opacity duration-1000 select-none pointer-events-none">
                  <span className="text-[60px] font-black font-display text-white leading-none">0{index + 1}</span>
               </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
