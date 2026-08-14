'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Users, Flame, GitCommit, Calendar } from 'lucide-react';

interface GithubUser {
  public_repos: number;
  followers: number;
  avatar_url: string;
}

export default function GithubActivity() {
  const [user, setUser] = useState<GithubUser>({
    public_repos: 65,
    followers: 50,
    avatar_url: 'https://avatars.githubusercontent.com/u/184862093?v=4',
  });
  const [streakError, setStreakError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('https://api.github.com/users/pulibharat')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && data.public_repos !== undefined) {
          setUser({
            public_repos: data.public_repos ?? 65,
            followers: data.followers ?? 50,
            avatar_url: data.avatar_url ?? 'https://avatars.githubusercontent.com/u/184862093?v=4',
          });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const stats = [
    { label: 'Public Repos', value: user.public_repos, icon: FolderGit2 },
    { label: 'Followers', value: user.followers, icon: Users },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 space-y-8 md:space-y-10"
    >
      {/* Profile header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
        <img
          src={user.avatar_url}
          alt="Puli Bharat"
          className="w-20 h-20 md:w-24 md:h-24 rounded-3xl object-cover ring-1 ring-black/5 shadow-xl shrink-0"
        />

        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <h4 className="text-2xl md:text-3xl font-black tracking-tight">Puli Bharat</h4>
            <a
              href="https://github.com/pulibharat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 glass rounded-full text-[9px] uppercase font-black tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
            >
              View Profile
            </a>
          </div>
          <p className="text-secondary text-sm md:text-base opacity-70 max-w-md">
            Open source contributor building AI-driven, real-world software.
          </p>
        </div>

        {/* Quick stat tiles */}
        <div className="flex gap-6 sm:gap-8 pt-2 sm:pt-0">
          {stats.map((s) => (
            <div key={s.label} className="text-center min-w-[64px]">
              <p className="text-2xl md:text-3xl font-black tracking-tight tabular-nums">
                {s.value}
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Streak + Profile Views */}
      <div className="flex flex-col lg:flex-row items-center gap-6 pt-2 border-t border-black/5">
        <div className="w-full lg:flex-1 overflow-x-auto pt-6">
          {!streakError ? (
            <img
              src="https://github-readme-streak-stats-eight.vercel.app/?user=pulibharat&background=FFFFFF00&border=FFFFFF00&stroke=00000000&ring=16A34A&fire=16A34A&currStreakLabel=18181B&sideLabels=52525B&dates=A1A1AA&currStreakNum=000000&sideNums=000000&hide_border=true"
              alt="Puli Bharat's GitHub streak stats"
              onError={() => setStreakError(true)}
              className="w-full min-w-[500px] lg:min-w-0 h-auto mx-auto"
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="glass p-5 rounded-2xl text-center space-y-1">
                <GitCommit className="w-5 h-5 mx-auto text-emerald-600 mb-1" />
                <p className="text-2xl font-black">599+</p>
                <p className="text-[10px] uppercase tracking-wider font-bold text-secondary">Total Contributions</p>
                <p className="text-[10px] text-zinc-400">Oct 2024 - Present</p>
              </div>
              <div className="glass p-5 rounded-2xl text-center space-y-1 ring-1 ring-emerald-500/20">
                <Flame className="w-5 h-5 mx-auto text-emerald-500 mb-1" />
                <p className="text-2xl font-black text-emerald-600">Active</p>
                <p className="text-[10px] uppercase tracking-wider font-bold text-emerald-600">Current Streak</p>
                <p className="text-[10px] text-zinc-400">Consistent Daily Builds</p>
              </div>
              <div className="glass p-5 rounded-2xl text-center space-y-1">
                <Calendar className="w-5 h-5 mx-auto text-zinc-600 mb-1" />
                <p className="text-2xl font-black">15 Days</p>
                <p className="text-[10px] uppercase tracking-wider font-bold text-secondary">Longest Streak</p>
                <p className="text-[10px] text-zinc-400">Jul 11 - Jul 25</p>
              </div>
            </div>
          )}
        </div>
        <div className="pt-6 lg:pt-0">
          <img
            src="https://komarev.com/ghpvc/?username=pulibharat&color=16a34a&style=flat&label=PROFILE+VIEWS"
            alt="Puli Bharat's profile view count"
            className="h-6"
          />
        </div>
      </div>

      {/* Contribution graph */}
      <div className="pt-2 border-t border-black/5">
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400 mb-6 pt-6">
          Contribution Graph
        </p>
        <div className="w-full overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/16a34a/pulibharat"
            alt="Puli Bharat's GitHub contribution graph"
            className="w-full min-w-[600px] h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
}
