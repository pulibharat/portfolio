'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, MousePointer2, Touchpad } from 'lucide-react';
import GithubActivity from './GithubActivity';

export default function Projects() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'AI & Deep Learning',
    'Computer Vision',
    'Data & Analytics',
  ];

  const projects = [
    {
      id: 1,
      title: 'Deep Q-Network (DQN)',
      category: 'Reinforcement Learning',
      group: 'AI & Deep Learning',
      description: 'A Deep Q-Network agent that learns to autonomously play Flappy Bird via trial and error. Uses experience replay, target networks, and an MLP (12-state input, 256 hidden units) with per-step gradient updates, boosting best score from 5 to far higher after training refinements.',
      image: '/flappygame.png',
      github: 'https://github.com/pulibharat/DQN-Flappy-bird-game',
      demo: 'https://www.youtube.com/watch?v=xFV3akEf4Rc',
      technologies: ['Python', 'PyTorch', 'Gymnasium', 'DQN'],
    },
    {
      id: 2,
      title: 'Neural Style Transfer App',
      category: 'Deep Learning',
      group: 'AI & Deep Learning',
      description: 'Deep learning web app that transforms content images into artistic creations. Implements AdaIN with a VGG-19 encoder and custom-trained decoder for real-time arbitrary style transfer, deployed with a Flask backend on Hugging Face Spaces.',
      image: '/nst.png',
      github: 'https://github.com/pulibharat/Neural-Style-Transfer-app',
      demo: 'https://huggingface.co/spaces/24pa1a429/NST-1',
      technologies: ['Python', 'Flask', 'PyTorch', 'Docker'],
    },
    {
      id: 3,
      title: 'AP Engineering Analytics',
      category: 'Data Engineering',
      group: 'Data & Analytics',
      description: 'A data-driven visualization platform for EAMCET 2025. Analyzes allotment trends across 300+ colleges with high-fidelity branch and category-wise insights.',
      image: '/eamcet analysis.png',
      github: 'https://github.com/pulibharat/pulibharat-Andhra-EAMCET-Analysis-First-Phase-Counseling',
      demo: 'https://eamcetanalysis.streamlit.app/',
      technologies: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    },
    {
      id: 4,
      title: 'Campus Eye Vision',
      category: 'Computer Vision',
      group: 'Computer Vision',
      description: 'Next-gen security intelligence using real-time video streams. Implements YOLOv8 for precise human detection and operational safety metrics.',
      image: '/campus_eye3.jpeg',
      github: 'https://github.com/pulibharat/campus-ai-dashboard',
      technologies: ['YOLOv8', 'OpenCV', 'PyTorch', 'Next.js'],
    },
    {
      id: 5,
      title: 'MotionMorph Stickman',
      category: 'AI Animation',
      group: 'AI & Deep Learning',
      description: 'Bridging human motion and 3D space. Maps real-time pose estimation to procedural animations in Unity using MediaPipe and C#.',
      image: '/motionmorph.png',
      github: 'https://github.com/pulibharat/MotionMorph-AI-Driven-Stickman-Animation-from-Video',
      technologies: ['MediaPipe', 'Unity', 'C#', 'Computer Vision'],
    },
    {
      id: 6,
      title: 'HR Executive Dashboard',
      category: 'Business Intelligence',
      group: 'Data & Analytics',
      description: 'Transforming workforce data into strategic intelligence. Interactive Tableau dashboards visualizing departmental performance and talent demographics.',
      image: '/hr.png',
      github: 'https://github.com/pulibharat/hr-dashboard-project',
      demo: 'https://public.tableau.com/app/profile/puli.bharat',
      technologies: ['Tableau', 'Data Modeling', 'Business Intel'],
    },
    {
      id: 7,
      title: 'Logistics Flow Engine',
      category: 'Logistics AI',
      group: 'Computer Vision',
      description: 'Dual-directional passenger tracking for high-traffic hubs. Leveraging YOLOv8 for precise spatial counts on escalators and transit points.',
      image: '/pplcnt.png',
      github: 'https://github.com/pulibharat/Real-Time-People-Counting-on-Escalators-using-YOLOv8',
      technologies: ['YOLOv8', 'OpenCV', 'Python'],
    },
    {
      id: 8,
      title: 'Urban Traffic Intelligence',
      category: 'Smart Cities',
      group: 'Computer Vision',
      description: 'Smart city framework for vehicle detection and urban flow optimization. Real-time logging of road usage metrics at scale.',
      image: '/carcount.png',
      github: 'https://github.com/pulibharat/Real-Time-Vehicle-Counting-System-Using-YOLOv8',
      technologies: ['YOLOv8', 'TensorFlow', 'Smart City'],
    },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.group === filter);

  return (
    <div className="space-y-12">
      {/* Top Filter & Interaction Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'glass text-secondary hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interaction Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-4 py-2 glass rounded-full ring-1 ring-black/5 w-fit"
        >
          <motion.div 
            animate={{ y: [0, -3, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <MousePointer2 className="w-3.5 h-3.5 text-black hidden md:block" />
            <Touchpad className="w-3.5 h-3.5 text-black block md:hidden" />
          </motion.div>
          <span className="text-[9px] uppercase font-black tracking-[0.2em] text-secondary">
            <span className="hidden md:inline">Hover for Source & Demo</span>
            <span className="inline md:hidden">Tap for Source & Demo</span>
          </span>
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isActive = activeId === project.id;
            
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
              <div className="space-y-4 px-1 sm:px-4 w-full">
                <div className="flex flex-wrap gap-2">
                   {project.technologies.map((tech) => (
                     <span key={tech} className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        {tech}
                     </span>
                   ))}
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight group-hover:text-gradient transition-all duration-700 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-base sm:text-lg md:text-xl text-secondary leading-relaxed max-w-xl opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>

                {/* Mobile Action Buttons — Always visible on phones & tablets */}
                <div className="flex flex-wrap items-center gap-3 pt-2 lg:hidden">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full font-bold uppercase tracking-[0.15em] text-[10px] active:scale-95 shadow-md"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 glass text-black rounded-full font-bold uppercase tracking-[0.15em] text-[10px] active:scale-95 shadow-md border border-black/10"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
        </AnimatePresence>
      </motion.div>

      {/* GitHub Activity */}
      <GithubActivity />

      {/* View More on GitHub */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center pt-4"
      >
        <a
          href="https://github.com/pulibharat?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 px-6 py-3 glass rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          <Github className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
            View More on GitHub
          </span>
        </a>
      </motion.div>
    </div>
  );
}
