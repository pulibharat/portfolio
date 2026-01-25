'use client';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Aspire Leaders Program',
      organization: 'HBS & Aspire Institute', // Extracted org
      type: 'Leadership', // Badge text
      date: 'Oct 2025', // Date
      logo: '/aspire_leaders_program_logo.jpg',
      description: 'Global Finalist selected from 45,228 applicants, participating in global leadership development and cross-cultural collaboration.',
    },
    {
      id: 2,
      title: 'GMI Mentorship Program',
      organization: 'Global Mentorship Initiative', // Added full org name for context
      type: 'Mentorship', // Badge text
      date: '2025', // Date
      logo: '/gmi_logo.png',
      description: 'Selected for the 2025 cohort, receiving structured mentorship for professional growth and career development in technology.',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Achievements</h2>
          <p className="text-slate-600 font-medium">
            A showcase of my leadership roles, mentorships, and competitive achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow flex items-start gap-5"
            >
              {/* Logo */}
              <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden border border-slate-100 bg-white flex items-center justify-center p-1">
                <img
                  src={achievement.logo}
                  alt={achievement.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">
                  {achievement.title}
                </h3>
                <p className="text-slate-500 font-medium text-sm mb-2">
                  {achievement.organization}
                </p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {achievement.description}
                </p>

                {/* Footer: Badge + Date */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                    {achievement.type}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{achievement.date}</span>
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
