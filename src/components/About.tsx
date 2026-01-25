'use client';

export default function About() {
  const experiences = [
    {
      title: 'Backend & Database Management',
      description: 'Developed scalable backend logic using Python and MySQL, implementing APIs, authentication, and structured data management.',
      image: '/assets/about/backend.png',
    },
    {
      title: 'Web Development',
      description: 'Created responsive web applications using HTML, CSS, JavaScript, and Python backend integration, including AI-powered healthcare and analytics platforms.',
      image: '/assets/about/web-dev.png',
    },
    {
      title: 'Artificial Intelligence & Computer Vision',
      description: 'Built AI solutions using Python and OpenCV, including face detection, recognition, and a JARVIS-like voice assistant with system automation.',
      image: '/assets/about/ai-vision.png',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Analyzed real-world datasets and developed interactive dashboards using Streamlit and Plotly to extract insights from projects like EAMCET Counseling and HR Analytics.',
      image: '/assets/about/data-science.png',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">About Me</h2>
        
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            I’m <span className="font-bold text-black">Bharat</span>, a B.Tech <span className="font-bold text-gray-900">Computer Science & Mathematics (CSM)</span> student with a strong interest in <span className="font-bold text-gray-900">Artificial Intelligence</span>, <span className="font-bold text-gray-900">Data Science</span>, and <span className="font-bold text-gray-900">Computer Vision</span>. I enjoy building real-world, impact-driven projects—from <span className="font-bold text-gray-900">AI assistants</span> and <span className="font-bold text-gray-900">face recognition systems</span> to <span className="font-bold text-gray-900">interactive data dashboards</span> and <span className="font-bold text-gray-900">web applications</span>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            I’m passionate about <span className="font-bold text-gray-900">problem-solving</span>, <span className="font-bold text-gray-900">clean code</span>, and <span className="font-bold text-gray-900">turning data into insights</span>, and I continuously learn new tools and technologies to create smart, scalable tech solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-48 h-48 mb-6 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{exp.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
