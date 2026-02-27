'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Custom Medium Icon as SVG since lucide doesn't include it natively easily
  const MediumIcon = ({ className }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1043.63 592.71" 
      fill="currentColor"
      className={className}
    >
      <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"/>
    </svg>
  );

  return (
    <div ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[10%] -left-[10%] w-[800px] h-[800px] bg-zinc-100 rounded-full blur-[120px] opacity-40" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-zinc-200 rounded-full blur-[150px] opacity-30" 
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-12 text-center lg:text-left">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <span className="w-8 h-px bg-black" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-secondary">Creative Engineer</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="heading-hero text-black"
              >
                PULI <br /> <span className="text-zinc-400">BHARAT</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl mx-auto lg:mx-0"
              >
                <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed">
                  Engineering the future of <span className="text-black font-bold">Artificial Intelligence</span> & <span className="text-black font-bold">Computer Vision</span>. Transforming complex data into elegant, high-performance visual intelligence.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
              >
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/pulibharat' },
                  { icon: Github, label: 'GitHub', href: 'https://github.com/pulibharat' },
                  { icon: MediumIcon, label: 'Medium', href: 'https://medium.com/@pulibharat' }
                 ].map((social) => (
                    <a 
                      key={social.label}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex items-center justify-center gap-2 px-5 py-2.5 glass rounded-full hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                        {social.label}
                      </span>
                    </a>
                 ))}
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8"
            >
              <a 
                href="#projects" 
                className="group relative px-12 py-6 bg-black text-white rounded-[2rem] font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">My Projects</span>
                <div className="absolute inset-x-0 bottom-0 h-0 bg-zinc-800 transition-all group-hover:h-full -z-0" />
              </a>
              
              <a 
                href="#contact" 
                className="group relative px-12 py-6 glass text-black rounded-[2rem] font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-2xl hover:text-white"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">Contact</span>
                <div className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all group-hover:h-full -z-0" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Visual Slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            style={{ y: y2, rotate }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto group">
              <div className="absolute inset-0 rounded-[4rem] bg-zinc-100 p-px">
                <div className="absolute inset-0 rounded-[4rem] bg-white shadow-2xl overflow-hidden border border-black/[0.03]">
                  {/* Decorative Elements inside slot */}
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                    <span className="text-[120px] font-black leading-none uppercase select-none">PB</span>
                  </div>
                  
                  {/* Content for the slot */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center group-hover:scale-105 transition-transform duration-1000">
                    <div className="w-24 h-24 glass rounded-[2.5rem] flex items-center justify-center mb-8 shadow-xl">
                      <svg className="w-10 h-10 text-black translate-y-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.4em] font-black text-secondary mb-2">Subject Portrait</p>
                    <p className="text-[10px] italic text-zinc-400">Refining visual assets for deployment</p>
                  </div>

                  {/* Glass Card on top */}
                  <motion.div 
                    animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-6 -right-6 w-48 p-6 glass rounded-3xl shadow-2xl hidden md:block"
                  >
                     <div className="space-y-3">
                        <div className="h-1 w-8 bg-black rounded-full" />
                        <p className="text-[10px] leading-relaxed font-bold">Currently Architecting: <br /> <span className="text-zinc-400">AI Analytics 2.0</span></p>
                     </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-black to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.4em] font-black [writing-mode:vertical-lr]">Scroll</span>
      </motion.div>
    </div>
  );
}
