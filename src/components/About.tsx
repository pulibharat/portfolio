'use client';

import { motion } from 'framer-motion';

export default function About() {
  const experiences = [
    {
      title: 'Database Management',
      description: 'Backend & DB: Python, MySQL, APIs, authentication',
      image: '/assets/about/backend.png',
    },
    {
      title: 'Web Development',
      description: 'Web Dev: HTML, CSS, JavaScript, Python',
      image: '/assets/about/web-dev.png',
    },
    {
      title: 'AI & Computer Vision',
      description: 'AI & CV: Python, OpenCV, face recognition',
      image: '/assets/about/ai-vision.png',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Data Science: Streamlit, Plotly, data analysis',
      image: '/assets/about/data-science.png',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-slate-900 mb-8 text-center"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16 space-y-6"
        >
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            I’m <span className="font-bold text-black">Bharat</span>, a B.Tech <span className="font-bold text-slate-900">CSM</span> student passionate about <span className="font-bold text-slate-900">AI</span>, <span className="font-bold text-slate-900">Data Science</span>, and <span className="font-bold text-slate-900">Computer Vision</span>. I build impact-driven projects like <span className="font-bold text-slate-900">AI assistants</span>, <span className="font-bold text-slate-900">face recognition systems</span>, <span className="font-bold text-slate-900">data dashboards</span>, and <span className="font-bold text-slate-900">web apps</span>, with a focus on problem-solving and scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-48 h-48 mb-6 transition-transform duration-300">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{exp.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
