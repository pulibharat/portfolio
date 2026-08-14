'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '/#projects' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Memories', href: '/memories' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <nav className="relative flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
             <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center font-display font-black text-2xl group-hover:bg-black group-hover:text-white group-hover:scale-110 transition-all duration-500">
                P
             </div>
             <span className="font-display font-bold text-xl tracking-tighter hidden sm:block">PULI BHARAT</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 p-1.5 glass rounded-[2rem]">
            {navLinks.map((link) => {
              const isMemories = link.label === 'Memories';
              const isActive = isMemories && pathname === '/memories';

              if (isMemories) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-black text-black transition-all flex items-center gap-2"
                  >
                    <span className="relative z-10 flex items-center gap-1.5 font-black tracking-[0.22em]">
                      <span className="group-hover:text-emerald-700 transition-colors">
                        {link.label}
                      </span>
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                    </span>

                    {/* Neon flashy line container */}
                    <span className="absolute bottom-1.5 left-3.5 right-3.5 h-[2.5px] rounded-full bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400 animate-neon-glow overflow-hidden transition-all duration-300 group-hover:h-[3px]">
                      {/* Animated neon light beam */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-neon-shimmer" />
                    </span>
                  </Link>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-secondary hover:text-black hover:bg-black/5 rounded-full transition-all"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
             <Link 
              href="/#contact" 
              className="px-8 py-3 bg-black text-white rounded-[1.5rem] text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Collaborate
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 glass rounded-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <motion.span 
                animate={isMenuOpen ? { rotate: 45, y: 4, scaleX: 1.2 } : { rotate: 0, y: 0, scaleX: 1 }}
                className="w-5 h-0.5 bg-black origin-center" 
              />
              <motion.span 
                animate={isMenuOpen ? { rotate: -45, y: -4, scaleX: 1.2 } : { rotate: 0, y: 0, scaleX: 1 }}
                className="w-5 h-0.5 bg-black origin-center" 
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[-1] glass-dark flex flex-col items-center justify-center p-12"
          >
            <div className="space-y-8 text-center">
              {navLinks.map((link, i) => {
                const isMemories = link.label === 'Memories';
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {isMemories ? (
                      <div className="inline-block relative">
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-3 text-4xl font-display font-black tracking-tight text-black hover:text-emerald-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{link.label}</span>
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                          </span>
                        </Link>
                        {/* Neon line under mobile Memories */}
                        <div className="h-[3px] w-full mt-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400 animate-neon-glow overflow-hidden relative">
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-neon-shimmer" />
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-4xl font-display font-black tracking-tight hover:text-accent transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
