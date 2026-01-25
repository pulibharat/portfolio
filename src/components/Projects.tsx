'use client';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AP Engineering Allotment Analytics (EAMCET 2025)',
      description: 'Analyzed EAMCET 2025 first-phase counseling data and built a dashboard to visualize student allotments across colleges (Top 5000 ranks, branch-wise & category-wise trends).',
      image: '/eamcet analysis.png',
      github: 'https://github.com/pulibharat/pulibharat-Andhra-EAMCET-Analysis-First-Phase-Counseling',
      demo: 'https://eamcetanalysis.streamlit.app/',
      technologies: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    },
    {
      id: 2,
      title: 'Campus Eye',
      description: 'AI-powered campus monitoring system that analyzes live video feeds, counts people, and provides real-time insights through an interactive web dashboard.',
      image: '/campus_eye3.jpeg',
      github: 'https://github.com/pulibharat/campus-ai-dashboard',
      technologies: ['YOLO', 'OpenCV', 'Dashboard', 'Teamwork'],
    },
    {
      id: 3,
      title: 'HR Analytics Dashboard',
      description: 'Designed a Tableau dashboard that transforms HR data into actionable insights, analyzing employee demographics, departmental spread, and salary trends across locations.',
      image: '/hr.png',
      github: 'https://github.com/pulibharat/hr-dashboard-project',
      demo: 'https://public.tableau.com/app/profile/puli.bharat',
      technologies: ['Tableau', 'Data Viz', 'HR Analytics'],
    },
    {
      id: 4,
      title: 'MotionMorph – AI-Driven Stickman Animation',
      description: 'Computer vision project that extracts 33 human pose keypoints from video using MediaPipe and uses Unity (C#) to simulate and animate a stickman by mapping joints and connections.',
      image: '/motionmorph.png',
      github: 'https://github.com/pulibharat/MotionMorph-AI-Driven-Stickman-Animation-from-Video',
      technologies: ['MediaPipe', 'Unity', 'C#'],
    },
    {
      id: 5,
      title: 'Real-Time People Counting on Escalators',
      description: 'Real-time computer vision system using YOLOv8 and OpenCV to detect, track, and count people moving upward and downward on escalators, optimized for low-latency performance.',
      image: '/pplcnt.png',
      github: 'https://github.com/pulibharat/Real-Time-People-Counting-on-Escalators-using-YOLOv8',
      technologies: ['YOLOv8', 'OpenCV', 'Python'],
    },
    {
      id: 6,
      title: 'Real-Time Vehicle Counting System',
      description: 'Computer vision system using YOLOv8 for object detection and OpenCV for real-time processing to count vehicles within defined road regions for smart city applications.',
      image: '/carcount.png',
      github: 'https://github.com/pulibharat/Real-Time-Vehicle-Counting-System-Using-YOLOv8',
      technologies: ['YOLOv8', 'OpenCV', 'Python'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">My Projects</h2>
        
        {/* Filter buttons could go here if needed, but omitted for now as per reference */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1 font-medium">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.377.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
