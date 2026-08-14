'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Copy, Check } from 'lucide-react';

// Custom Medium Icon
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

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
      {/* Left: Communication Hub */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-7 flex flex-col justify-between space-y-20"
      >
        <div className="space-y-10">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-4 py-2 glass rounded-full ring-1 ring-black/5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Open for Intake</span>
             </div>
             <div className="h-px w-20 bg-black/10" />
          </div>

          <h3 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[1] text-black mb-4">
             LET'S <br />
             <span className="text-zinc-300">CONNECT</span>
          </h3>
          
          <p className="text-2xl md:text-3xl text-secondary max-w-xl font-medium leading-relaxed italic">
            "Turning complex theoretical frameworks into <span className="text-black font-bold">tangible intelligence</span>. Let's discuss your next breakthrough."
          </p>
        </div>

        {/* Quick Social Access */}
        <div className="flex flex-wrap gap-4 pt-4">
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
                className="group flex items-center justify-center gap-2 px-5 py-3 glass rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  {social.label}
                </span>
              </a>
           ))}
        </div>
      </motion.div>

      {/* Right: Channel Grid */}
      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
        {[
          {
            label: 'Inquiry via Email',
            value: 'pulibharat2007@gmail.com',
            href: 'mailto:pulibharat2007@gmail.com',
            copyValue: 'pulibharat2007@gmail.com',
            actionText: 'Click to Email',
            icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )
          },
          {
            label: 'Direct Communication',
            value: '+91 79972 57754',
            href: 'tel:+917997257754',
            copyValue: '+917997257754',
            actionText: 'Click to Call',
            icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            )
          },
          {
            label: 'Based In',
            value: 'Bhimavaram, India',
            href: undefined,
            copyValue: undefined,
            actionText: '',
            icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )
          },
          {
            label: 'Response Time',
            value: 'Within 24 Hours',
            href: undefined,
            copyValue: undefined,
            actionText: '',
            icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          }
        ].map((item, idx) => {
          const isCopied = copiedField === item.label;

          const Content = (
            <div className="glass p-6 md:p-8 rounded-[2rem] group hover-glow transition-all duration-700 flex flex-col justify-between gap-6 h-full min-w-0 relative">
              <div className="flex justify-between items-start">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-xl">
                    {item.icon}
                  </div>
                  {item.copyValue && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCopy(item.copyValue!, item.label);
                      }}
                      title="Copy to clipboard"
                      className="px-3 py-1.5 glass rounded-full text-[9px] uppercase font-bold text-secondary hover:text-black hover:bg-black/10 transition-all flex items-center gap-1.5"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400 mb-1">{item.label}</p>
                <p className="text-lg md:text-xl font-bold tracking-tight text-black break-words">{item.value}</p>
              </div>
            </div>
          );

          return item.href ? (
            <motion.a
              key={idx}
              href={item.href}
              className="min-w-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {Content}
            </motion.a>
          ) : (
            <motion.div
              key={idx}
              className="min-w-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {Content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
