'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, MousePointer2, Touchpad } from 'lucide-react';

export default function Projects() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'AP Engineering Analytics',
      category: 'Data Engineering',
      description: 'A data-driven visualization platform for EAMCET 2025. Analyzes allotment trends across 300+ colleges with high-fidelity branch and category-wise insights.',
      image: '/eamcet analysis.png',
      github: 'https://github.com/pulibharat/pulibharat-Andhra-EAMCET-Analysis-First-Phase-Counseling',
      demo: 'https://eamcetanalysis.streamlit.app/',
      technologies: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    },
    {
      id: 2,
      title: 'Campus Eye Vision',
      category: 'Computer Vision',
      description: 'Next-gen security intelligence using real-time video streams. Implements YOLOv8 for precise human detection and operational safety metrics.',
      image: '/campus_eye3.jpeg',
      github: 'https://github.com/pulibharat/campus-ai-dashboard',
      technologies: ['YOLOv8', 'OpenCV', 'PyTorch', 'Next.js'],
    },
    {
      id: 3,
      title: 'MotionMorph Stickman',
      category: 'AI Animation',
      description: 'Bridging human motion and 3D space. Maps real-time pose estimation to procedural animations in Unity using MediaPipe and C#.',
      image: '/motionmorph.png',
      github: 'https://github.com/pulibharat/MotionMorph-AI-Driven-Stickman-Animation-from-Video',
      technologies: ['MediaPipe', 'Unity', 'C#', 'Computer Vision'],
    },
    {
      id: 4,
      title: 'HR Executive Dashboard',
      category: 'Business Intelligence',
      description: 'Transforming workforce data into strategic intelligence. Interactive Tableau dashboards visualizing departmental performance and talent demographics.',
      image: '/hr.png',
      github: 'https://github.com/pulibharat/hr-dashboard-project',
      demo: 'https://public.tableau.com/app/profile/puli.bharat',
      technologies: ['Tableau', 'Data Modeling', 'Business Intel'],
    },
    {
      id: 5,
      title: 'Logistics Flow Engine',
      category: 'Logistics AI',
      description: 'Dual-directional passenger tracking for high-traffic hubs. Leveraging YOLOv8 for precise spatial counts on escalators and transit points.',
      image: '/pplcnt.png',
      github: 'https://github.com/pulibharat/Real-Time-People-Counting-on-Escalators-using-YOLOv8',
      technologies: ['YOLOv8', 'OpenCV', 'Python'],
    },
    {
      id: 6,
      title: 'Urban Traffic Intelligence',
      category: 'Smart Cities',
      description: 'Smart city framework for vehicle detection and urban flow optimization. Real-time logging of road usage metrics at scale.',
      image: '/carcount.png',
      github: 'https://github.com/pulibharat/Real-Time-Vehicle-Counting-System-Using-YOLOv8',
      technologies: ['YOLOv8', 'TensorFlow', 'Smart City'],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Interaction Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center md:justify-start"
      >
        <div className="flex items-center gap-3 px-5 py-2.5 glass rounded-full ring-1 ring-black/5">
          <motion.div 
            animate={{ y: [0, -3, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <MousePointer2 className="w-4 h-4 text-black hidden md:block" />
            <Touchpad className="w-4 h-4 text-black block md:hidden" />
          </motion.div>
          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-secondary">
            <span className="hidden md:inline">Hover images for Source & Demo</span>
            <span className="inline md:hidden">Tap images for Source & Demo</span>
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {projects.map((project, index) => {
          const isActive = activeId === project.id;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-start space-y-8"
            >
              {/* Parallax Container for Image */}
              <div 
                onClick={() => setActiveId(isActive ? null : project.id)}
                className="relative w-full aspect-[16/10] rounded-[3rem] overflow-hidden bg-zinc-100 border border-black/5 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-700 cursor-pointer"
              >
                 <div className={`absolute inset-0 transition-all z-10 duration-700 ${isActive ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/0 lg:group-hover:bg-black/50 backdrop-blur-none lg:group-hover:backdrop-blur-sm'}`} />
                 <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-105' : 'scale-100 group-hover:scale-105'}`}
                />
                
                {/* Category Tag */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
                  <span className="px-4 md:px-5 py-2 glass rounded-full text-[8px] md:text-[9px] uppercase font-black tracking-[0.3em] text-black shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Unified Overlay Links */}
                <div className={`absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'}`}>
                   <div className="flex flex-col sm:flex-row gap-4">
                     {project.github && (
                       <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold uppercase tracking-[0.1em] text-[10px] hover:scale-105 transition-transform shadow-2xl"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                     )}
                     {project.demo && (
                       <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-full font-bold uppercase tracking-[0.1em] text-[10px] hover:scale-105 transition-transform shadow-2xl border border-white/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                     )}
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 px-4 w-full">
                <div className="flex flex-wrap gap-2">
                   {project.technologies.map((tech) => (
                     <span key={tech} className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        {tech}
                     </span>
                   ))}
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black tracking-tight group-hover:text-gradient transition-all duration-700">
                  {project.title}
                </h3>
                
                <p className="text-xl text-secondary leading-relaxed max-w-xl opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
