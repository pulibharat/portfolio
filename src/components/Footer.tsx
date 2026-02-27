'use client';

import { motion } from 'framer-motion';

export default function Footer() {

  return (
    <footer className="pt-12 pb-12 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      <div className="max-w-[1600px] mx-auto flex justify-center">
        <div className="hidden md:block">
          <span className="text-5xl font-black tracking-tighter opacity-[0.03] select-none text-black">PB</span>
        </div>
      </div>
    </footer>
  );
}
