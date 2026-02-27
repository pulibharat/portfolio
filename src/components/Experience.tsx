'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      position: 'Data Visualization Intern',
      company: 'Infosys Springboard',
      period: 'Oct 2025 - Present',
      location: 'Remote',
      logo: '/infosys_springboard_logo.jpg',
      description: 'Architecting interactive data visualisations and executive dashboards, facilitating data-driven decision making through clear information design.',
      skills: ['Data Visualization', 'Python', 'Tableau'],
    },
    {
      id: 2,
      position: 'Aspire Leaders Program',
      company: 'Aspire Institute',
      period: 'Aug 2025 - Oct 2025',
      location: 'Remote',
      logo: '/aspire_leaders_program_logo.jpg',
      description: 'Intensive leadership development program focused on global collaboration, emotional intelligence, and professional networking.',
      skills: ['Leadership', 'Networking', 'Global Collab'],
    },
    {
      id: 3,
      position: 'Data Science Intern',
      company: 'EISystems Technologies',
      period: 'Jun 2025 - Aug 2025',
      location: 'Remote',
      logo: '/EiSystems.jpg',
      description: 'Applied statistical modeling and data mining techniques to derive actionable insights from complex datasets.',
      skills: ['Data Science', 'Pandas', 'Analytic Modeling'],
    },
    {
      id: 4,
      position: 'AI Intern',
      company: 'AICTE (IBM SkillsBuild)',
      period: 'Jun 2025 - Jul 2025',
      location: 'Remote',
      logo: '/aicte_neat_cell_logo.jpg',
      description: 'Hands-on training in artificial intelligence foundations, focusing on cloud-based deployment and intelligent agent design.',
      skills: ['AI Foundations', 'IBM Cloud', 'NLP'],
    },
    {
      id: 5,
      position: 'AI & ML Intern',
      company: 'Elevate Labs',
      period: 'May 2025 - Jun 2025',
      location: 'Bhimavaram, AP',
      logo: '/elavelate labs.jpg',
      description: 'Implemented machine learning pipelines for predictive analysis. Recognized as Best Performer for exceptional project delivery.',
      skills: ['Machine Learning', 'EDA', 'Model Optimization'],
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto pl-12 sm:pl-0">
      {/* Timeline central line */}
      <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent sm:-translate-x-1/2" />

      <div className="space-y-24 sm:space-y-32">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex flex-col sm:flex-row items-center group ${
              index % 2 === 0 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-31px] sm:left-1/2 w-10 h-10 rounded-2xl glass-dark border border-black/5 z-20 sm:-translate-x-1/2 flex items-center justify-center group-hover:scale-110 group-hover:bg-black transition-all duration-500 shadow-2xl">
               <div className="w-2 h-2 rounded-full bg-black group-hover:bg-white animate-pulse" />
            </div>

            {/* Content Card */}
            <div className={`w-full sm:w-[45%] transition-all duration-700`}>
              <div className="glass p-6 md:p-10 rounded-3xl md:rounded-[3rem] hover-glow relative group/card">
                <div className="block sm:hidden text-[9px] uppercase tracking-[0.3em] font-black text-black/40 mb-4 bg-black/5 inline-block px-3 py-1 rounded-full">
                  {exp.period}
                </div>
                <div className="hidden sm:block absolute top-8 right-10 text-[10px] uppercase tracking-[0.3em] font-black text-black/10 group-hover/card:text-black/20 transition-colors">
                  {exp.period}
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  {/* Logo & Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl p-2 md:p-3 flex items-center justify-center shadow-xl group-hover/card:scale-110 transition-transform duration-500 group-hover/card:bg-accent ring-1 ring-black/5 shrink-0">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-display font-bold group-hover/card:text-black transition-colors leading-tight break-words">{exp.position}</h3>
                      <p className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-secondary text-base md:text-lg leading-relaxed opacity-80 italic group-hover/card:opacity-100 transition-opacity">
                    "{exp.description}"
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 md:px-4 md:py-1.5 glass border-black/5 text-secondary text-[9px] md:text-[10px] rounded-xl font-bold uppercase tracking-widest group-hover/card:text-black group-hover/card:border-black/30 transition-all font-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Spacing for layout */}
            <div className="hidden sm:block sm:w-[10%]" />
            <div className="hidden sm:block sm:w-[35%] px-10">
               <div className="opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 select-none pointer-events-none scale-125 origin-center">
                  <span className="text-[120px] font-black font-display text-black leading-none">0{index + 1}</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
