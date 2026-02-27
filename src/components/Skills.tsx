'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Automatically select "Programming" when viewing on a phone
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setActiveCategory("Programming");
    }
  }, []);

  const skillCategories = [
    {
      title: "Core Engineering",
      skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Software Testing & Debugging"]
    },
    {
      title: "Programming",
      skills: ["Java (Core)", "Python (NumPy, Pandas, Scikit-learn)", "C (Intermediate)", "SQL"]
    },
    {
      title: "AI & Computer Vision",
      skills: ["OpenCV", "MediaPipe", "Deep Learning", "Neural Networks (CNNs)", "YOLOv8", "Image Processing"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["Git", "GitHub", "VS Code", "Streamlit", "Kaggle"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Problem Solving", "Teamwork", "Time Management"]
    }
  ];

  const filteredSkills = activeCategory === "All"
    ? [...new Set(skillCategories.flatMap(category => category.skills))]
    : skillCategories.find(category => category.title === activeCategory)?.skills || [];

  return (
    <div className="space-y-16">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
        <button
          onClick={() => setActiveCategory("All")}
          suppressHydrationWarning
          className={`px-4 py-2.5 md:px-8 md:py-3.5 rounded-full md:rounded-[1.25rem] text-[9px] sm:text-[10px] md:text-xs uppercase font-bold tracking-[0.1em] md:tracking-[0.15em] transition-all duration-500 ${
            activeCategory === "All"
              ? "bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] scale-100 md:scale-105"
              : "glass text-secondary hover:text-black"
          }`}
        >
          All
        </button>
        {skillCategories.map((category) => (
          <button
            key={category.title}
            onClick={() => setActiveCategory(category.title)}
            suppressHydrationWarning
            className={`px-4 py-2.5 md:px-8 md:py-3.5 rounded-full md:rounded-[1.25rem] text-[9px] sm:text-[10px] md:text-xs uppercase font-bold tracking-[0.1em] md:tracking-[0.15em] transition-all duration-500 ${
              activeCategory === category.title
                ? "bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] scale-100 md:scale-105"
                : "glass text-secondary hover:text-black"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        <AnimatePresence mode='popLayout'>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 150,
                mass: 1
              }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              key={skill}
              className="group h-[80px] glass rounded-2xl flex items-center justify-center px-6 py-4 cursor-default hover-glow relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/[0.01] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 text-[10px] sm:text-[11px] md:text-[13px] font-bold tracking-tight text-secondary group-hover:text-black transition-colors duration-300 text-center leading-tight px-1 md:px-2">
                {skill}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
