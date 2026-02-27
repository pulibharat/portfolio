'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
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
          <a href="#home" className="group flex items-center gap-3">
             <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center font-display font-black text-2xl group-hover:bg-black group-hover:text-white group-hover:scale-110 transition-all duration-500">
                P
             </div>
             <span className="font-display font-bold text-xl tracking-tighter hidden sm:block">PULI BHARAT</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 p-1.5 glass rounded-[2rem]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-secondary hover:text-black hover:bg-black/5 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <a 
              href="#contact" 
              className="px-8 py-3 bg-black text-white rounded-[1.5rem] text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Collaborate
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 glass rounded-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  className="block text-4xl font-display font-black tracking-tight hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
