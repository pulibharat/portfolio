'use client';

export default function About() {
  const experiences = [
    {
      title: 'Backend & Database Management',
      description: 'Backend & DB: Python, MySQL, APIs, authentication',
    },
    {
      title: 'Web Development',
      description: 'Web Dev: HTML, CSS, JavaScript, Python',
    },
    {
      title: 'Artificial Intelligence & Computer Vision',
      description: 'AI & CV: Python, OpenCV, face recognition',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Data Science: Streamlit, Plotly, data analysis',
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
            <div key={index} className="flex flex-col text-left group">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{exp.title}</h3>
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
