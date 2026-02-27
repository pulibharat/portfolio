'use client';

import { motion } from 'framer-motion';

export default function About() {
  const categories = [
    {
      title: 'AI & Neural Systems',
      description: 'Architecting deep learning models and custom computer vision pipelines using Python, OpenCV, and PyTorch.',
      tag: 'Machine Intel',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Algorithmic Frontiers',
      description: 'Engineering high-performance software landscapes with Next.js and specialized backend frameworks.',
      tag: 'Core Engineering',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Analytic Visualization',
      description: 'Transforming multidimensional data into high-fidelity interactive intelligence using Streamlit and Tableau.',
      tag: 'Data Cognition',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Structural Backend',
      description: 'Designing resilient database architectures and secure API layers to sustain complex data ecosystems.',
      tag: 'Backbone Systems',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
  ];

  return (
    <div className="space-y-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl"
      >
        <div className="text-2xl md:text-4xl font-black leading-[1.1] tracking-tight text-secondary space-y-10 italic">
          <p>
            Currently pursuing <span className="text-black font-black not-italic">Computer Science & Mathematics</span> at VIT Bhimavaram. Obsessed with the junction where <span className="text-black not-italic">Machine Intel</span> meets real-world utility.
          </p>
          <p className="not-italic text-lg md:text-xl font-medium tracking-normal text-zinc-400 max-w-2xl leading-relaxed">
            I architect solutions that bridge the gap between theoretical models and practical deployment. From autonomous vision systems to strategic analytics, my goal is to build software that is both <span className="text-black font-bold">computationally superior</span> and <span className="text-black font-bold">human-centric</span>.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {categories.map((cat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group p-8 md:p-12 glass rounded-3xl md:rounded-[3.5rem] hover-glow relative overflow-hidden flex flex-col items-start gap-6 md:gap-12"
          >
             <div className="w-12 h-12 md:w-14 md:h-14 glass shrink-0 rounded-2xl flex items-center justify-center text-zinc-300 group-hover:bg-black group-hover:text-white transition-all duration-700 shadow-xl">
                {cat.icon}
             </div>
             
             <div className="space-y-4 md:space-y-6">
                <span className="inline-block px-4 md:px-5 py-1.5 md:py-2 glass text-[9px] md:text-[10px] uppercase font-black tracking-[0.3em] rounded-full text-zinc-400 group-hover:text-black transition-colors">
                  {cat.tag}
                </span>
                
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight group-hover:text-gradient transition-all duration-700">
                    {cat.title}
                  </h3>
                  <p className="text-secondary text-base md:text-xl font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {cat.description}
                  </p>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
