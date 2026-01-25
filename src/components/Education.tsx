'use client';

export default function Education() {
  const education = [
    {
      id: 1,
      school: 'Vishnu Institute of Technology (Autonomous)',
      program: 'B.Tech in Artificial Intelligence and Machine Learning', // Updated program
      period: '2024 - 2028', // Updated period
      grade: '9.1 CGPA', // Added grade
      logo: '/vishnu.jpg',
    },
    {
      id: 2,
      school: 'Aspire Institute',
      program: 'Aspire Leaders Program',
      period: 'Oct 2025',
      grade: undefined as string | undefined, // Kept undefined as discussed
      logo: '/aspire_leaders_program_logo.jpg',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8"
            >
              <div className="flex gap-5 sm:gap-6 items-start">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl flex-shrink-0"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    {edu.school}
                  </h3>
                  <p className="text-gray-600 mt-1 font-bold">{edu.program}</p>

                  <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-gray-600 text-sm font-medium">
                    {edu.period && (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{edu.period}</span>
                      </div>
                    )}

                    {edu.grade && (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L3.74 11.5 12 7l8.26 4.5L12 16zm-6 2v-4.17l6 3.27 6-3.27V18c0 1.66-2.69 3-6 3s-6-1.34-6-3z" />
                        </svg>
                        <span>
                          <span className="font-bold">Grade:</span> {edu.grade}
                        </span>
                      </div>
                    )}
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
