'use client';
import { useState } from 'react';

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
    <section id="skills" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Skills Section</h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === "All"
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-3 justify-center">
          {filteredSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-lg text-sm sm:text-base hover:bg-blue-200 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
