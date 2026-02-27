'use client';

import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { track } from '@vercel/analytics';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const sectionIndices: { [key: string]: string } = {
  about: '01',
  skills: '02',
  projects: '03',
  experience: '04',
  education: '05',
  certifications: '06',
  achievements: '07',
  contact: '08',
};

export default function Section({ id, children, className = '', title }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (isInView) {
      startTime.current = Date.now();
      track('section_view', { section: id });
    } else {
      if (startTime.current) {
        const duration = Math.round((Date.now() - startTime.current) / 1000);
        if (duration > 2) {
          track('section_time', { section: id, duration_seconds: duration });
        }
        startTime.current = null;
      }
    }
  }, [isInView, id]);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col mb-20 space-y-4"
          >
             <div className="flex items-center gap-4">
                <span className="text-black font-mono text-sm tracking-[0.3em] font-black">
                   [{sectionIndices[id.toLowerCase()] || 'XX'}]
                </span>
                <div className="h-px flex-grow bg-gradient-to-r from-black/20 to-transparent" />
             </div>
             <h2 className="heading-section !mb-0 text-gradient leading-none">
               {title}
             </h2>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
