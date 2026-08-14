'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';

interface Moment {
  id: number;
  title: string;
  tag: string;
  images: string[];
  description?: string;
  meta?: string;
  link?: string;
  linkLabel?: string;
}

export default function Memories() {
  const moments: Moment[] = [
    {
      id: 1,
      title: 'Spark Tank — Finalist',
      tag: 'Startup Pitch',
      images: ['/memories/sparktank.jpg'],
      meta: 'Team Dream Crew',
      description:
        'Reached the finals of Spark Tank pitching "Campus Eye" — what started as an idea grew into a solution we believe can create real impact, built on problem-solving, innovation, and relentless teamwork.',
      link: 'https://youtu.be/uGYlyL75nlE?si=PWYPONn4AvZ8lgAn',
      linkLabel: 'Watch Pitch',
    },
    {
      id: 2,
      title: 'InnoVIT Hackathon — Semi-Finalist',
      tag: 'Hackathon',
      images: ['/memories/innovit.jpg'],
      description:
        'Built "Udaan Setu" with my team — a platform connecting small businesses with influencers to make marketing more accessible and affordable through collaborative reels.',
      link: 'https://udaansetu-eight.vercel.app/',
      linkLabel: 'Udaan Setu',
    },
    {
      id: 3,
      title: 'Global AI Hackathon 2026',
      tag: 'Cross-Border Collaboration',
      images: ['/memories/global1.jpg', '/memories/global2.jpg', '/memories/global3.jpg', '/memories/global4.jpg'],
      meta: 'with Tchouala Therese & RIRIHAFI Gamaliel',
      description:
        'Collaborated with an international team to identify, debate, and solve a real-world problem in a fast-paced 24-hour hackathon — listening before convincing, disagreeing with respect, and building together across cultures and time zones.',
    },
    {
      id: 4,
      title: 'Aspire Leaders Program — Graduation',
      tag: 'Leadership',
      images: ['/memories/aspirealumni1.jpg', '/memories/aspirealumni2.jpg'],
      meta: 'Oct 17 · Aspire Institute',
      description:
        'Celebrated the Aspire Leaders Program Graduation Ceremony, reflecting on a journey of growth and global collaboration alongside changemakers worldwide. Continuing on as an alumnus through the Extended Leadership Program (ELP).',
    },
    {
      id: 5,
      title: 'DeepHack — 1st Place 🏆',
      tag: 'Hackathon Winner',
      images: ['/memories/deephack1.jpg', '/memories/deephack2.jpg'],
      meta: 'Team Dream-Crew',
      description:
        'Won 1st place with "CampusEye" — an AI-powered campus safety system built with OpenCV. Features triple-riding detection, ID card verification at gates, and real-time fighting alerts to campus security. Led a passionate team through the full build under hackathon time pressure.',
    },
    {
      id: 6,
      title: 'Apna College — Resume Review',
      tag: 'Mentorship',
      images: ['/memories/apna1.jpg'],
      meta: 'with Shradha Khapra · Apna College',
      description:
        'Attended a live Resume Mentorship Session where Shradha Khapra Ma’am reviewed my resume and commended my projects for a 2nd year B.Tech student. From building foundational skills via Apna College to getting direct guidance on open source and internships, it was a truly motivating milestone.',
    },
    {
      id: 7,
      title: '1:1 Career Mentorship',
      tag: 'Mentorship',
      images: ['/memories/mentorship.jpg'],
      meta: 'with Mandar Chitale',
      description:
        'Mentored by Mandar Chitale across interview prep, resume strategy, and AI/ML career roadmaps. One lesson stayed with me above all: "Communication can always improve with time, but becoming truly skilled at your work matters even more."',
    },
    {
      id: 8,
      title: 'Vishvatech 3.0',
      tag: 'Entrepreneurship',
      images: ['/memories/enter1.jpg', '/memories/enter2.jpg', '/memories/enter3.jpg'],
      meta: 'Vishnu Institute of Technology',
      description:
        'Met Alankar Achadian, creator of a river-cleaning robot, who challenged me to build a working prototype before discussing an internship: "observe the problems around you, understand them, then solve them with the technology you know." A mindset shift that stuck.',
    },
    {
      id: 9,
      title: 'HACK-A-TRON',
      tag: 'First Hackathon',
      images: ['/memories/gdg1hackathon.jpg'],
      meta: 'Google Developer Groups, VIT',
      description:
        'My first-ever hackathon — a 24-hour build organized by GDG VIT. Tackled real-world challenges with a team of brilliant minds and shipped something innovative in a single day.',
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 max-w-7xl mx-auto">
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 w-fit"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>

        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-3 px-5 py-2.5 glass rounded-full ring-1 ring-black/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-secondary">
              Hackathons, Mentorships & Community Moments
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-black">
            Memories & Milestones
          </h1>
          <p className="text-secondary text-base sm:text-lg md:text-xl max-w-3xl opacity-80 leading-relaxed">
            A chronological gallery of hackathons, international programs, startup pitching, and mentorship experiences shaping my growth.
          </p>
        </div>
      </motion.div>

      {/* Moments List */}
      <div className="space-y-16 md:space-y-24">
        {moments.map((m, index) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
          >
            {/* Image side */}
            <div className="relative w-full md:w-[42%] shrink-0 aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-zinc-100 border border-black/5 shadow-xl">
              {m.images.length === 1 ? (
                <img
                  src={m.images[0]}
                  alt={m.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`absolute inset-0 grid gap-1 ${
                    m.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 grid-rows-2'
                  }`}
                >
                  {m.images.map((src) => (
                    <img key={src} src={src} alt={m.title} className="w-full h-full object-cover" />
                  ))}
                </div>
              )}
            </div>

            {/* Matter side */}
            <div className="w-full md:w-[58%] flex flex-col justify-center space-y-3 md:space-y-4 py-2">
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 glass rounded-full text-[9px] uppercase font-black tracking-[0.25em] text-secondary">
                  {m.tag}
                </span>
                <span className="text-[10px] font-black text-black/10">0{index + 1}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                {m.title}
              </h3>

              {m.meta && (
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-zinc-400">
                  {m.meta}
                </p>
              )}

              {m.description && (
                <p className="text-base text-secondary leading-relaxed opacity-80 whitespace-pre-line">
                  {m.description}
                </p>
              )}

              {m.link && (
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 w-fit px-6 py-3 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-transform shadow-xl"
                >
                  <ExternalLink className="w-4 h-4" />
                  {m.linkLabel ?? 'View'}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom return bar */}
      <div className="pt-12 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">
          End of Memories Gallery (09 Moments)
        </span>
        <Link
          href="/"
          className="px-8 py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl"
        >
          Return to Portfolio
        </Link>
      </div>
    </div>
  );
}
