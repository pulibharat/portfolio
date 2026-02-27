'use client';

import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      id: 1,
      school: 'Vishnu Institute of Technology (Autonomous)',
      program: 'B.Tech in Artificial Intelligence and Machine Learning',
      period: '2024 - 2028',
      grade: '9.1 CGPA',
      location: 'Andhra Pradesh, India',
      logo: '/vishnu.jpg',
    },
    {
      id: 2,
      school: 'Aspire Institute',
      program: 'Aspire Leaders Program',
      period: 'Oct 2025',
      grade: 'Distinction',
      location: 'Global / Remote',
      logo: '/aspire_leaders_program_logo.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {education.map((edu, index) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative"
        >
          <div className="glass p-10 rounded-[2.5rem] h-full flex flex-col items-start gap-8 hover-glow transition-all duration-700">
             {/* Header */}
             <div className="flex justify-between items-start w-full">
                <div className="w-14 h-14 bg-white rounded-2xl p-3 flex items-center justify-center border border-black/5 shadow-xl group-hover:scale-110 transition-transform duration-700">
                  <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                </div>
                <div className="text-right">
                   <p className="text-[10px] uppercase tracking-[0.3em] font-black text-black mb-1">{edu.period}</p>
                   <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">{edu.location}</p>
                </div>
             </div>

             {/* Content */}
             <div className="space-y-3 flex-grow">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-[1] group-hover:text-gradient transition-all duration-700">
                  {edu.school}
                </h3>
                <p className="text-lg md:text-xl font-medium text-secondary opacity-80 group-hover:opacity-100 transition-opacity">
                  {edu.program}
                </p>
             </div>

             {/* Footer Metrics */}
             <div className="w-full pt-6 border-t border-black/[0.03] flex items-end justify-between">
                <div>
                   <p className="text-[9px] uppercase tracking-[0.4em] font-black text-zinc-400 mb-2">Academic Result</p>
                   <p className="text-3xl font-black tracking-tight">{edu.grade}</p>
                </div>
                <div className="opacity-10 group-hover:opacity-100 transition-opacity duration-1000">
                   <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                   </svg>
                </div>
             </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
