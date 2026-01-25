'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

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
    ? skillCategories.flatMap(category => category.skills)
    : skillCategories.find(category => category.title === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-slate-900 mb-12"
        >
          Skills Section
        </motion.h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === "All"
                ? "bg-blue-700 text-white shadow-lg scale-105"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === category.title
                  ? "bg-blue-700 text-white shadow-lg scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="flex flex-wrap gap-3 justify-center">
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.span
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                key={skill}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg text-sm sm:text-base hover:border-blue-400 hover:text-blue-700 transition-colors cursor-default shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
