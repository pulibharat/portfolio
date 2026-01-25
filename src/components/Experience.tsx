'use client';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      position: 'Data Visualization Intern',
      company: 'Infosys Springboard',
      logo: '/infosys_springboard_logo.jpg',
      period: 'Oct 2025 - Present',
      duration: '4 mos',
      location: 'Remote',
      description: 'Working as a Data Visualization Intern, creating compelling visualizations and dashboards to communicate data insights effectively.',
      skills: ['Data Visualization', 'Python', 'Tableau'],
    },
    {
      id: 2,
      position: 'Aspire Leaders Program',
      company: 'Aspire Institute',
      logo: '/aspire_leaders_program_logo.jpg',
      period: 'Aug 2025 - Oct 2025',
      duration: '3 mos',
      location: 'Remote',
      description: 'Completed the Aspire Leaders Program, enhancing leadership, teamwork, and networking skills through global collaboration and community projects.',
      skills: ['Leadership', 'Teamwork', 'Networking'],
    },
    {
      id: 3,
      position: 'Data Science with Python',
      company: 'EISystems Technologies',
      logo: '/EiSystems.jpg',
      period: 'Jun 2025 - Aug 2025',
      duration: '3 mos',
      location: 'Remote',
      description: 'Completed internship with training in Data Science using Python, gaining practical exposure to data analysis and related concepts.',
      skills: ['Data Science', 'Python', 'Data Analysis'],
    },
    {
      id: 4,
      position: 'Artificial Intelligence Intern',
      company: 'AICTE (IBM SkillsBuild)',
      logo: '/aicte_neat_cell_logo.jpg',
      period: 'Jun 2025 - Jul 2025',
      duration: '2 mos',
      location: 'Remote',
      description: 'Internship in collaboration with Edunet Foundation & IBM SkillsBuild, gaining comprehensive knowledge in AI fundamentals and applications.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'IBM Cloud'],
    },
    {
      id: 5,
      position: 'Artificial Intelligence & Machine Learning Intern',
      company: 'Elevate Labs',
      logo: '/elavelate labs.jpg',
      period: 'May 2025 - Jun 2025',
      duration: '2 mos',
      location: 'Bhimavaram, Andhra Pradesh, India',
      description: 'Completed AI & ML internship with focus on Machine Learning, Exploratory Data Analysis and advanced techniques. Certificate of Completion – Best Performer.',
      skills: ['Machine Learning', 'Exploratory Data Analysis', 'Python'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7"
            >
              <div className="flex gap-5 sm:gap-6 items-start">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl flex-shrink-0"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">{exp.position}</h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>

                  <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-gray-600 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-8V5a1 1 0 10-2 0v6a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414L11 10.586z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{exp.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="min-w-0 truncate">{exp.location}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700 leading-relaxed font-medium">{exp.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
