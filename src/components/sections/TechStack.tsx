'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '@/components/common/ScrollAnimation';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

/* ── Data ──────────────────────────────────────────────────────────── */
interface Tech { name: string; icon: string }
type Category = 'Languages' | 'Frameworks' | 'Databases' | 'Tools';

const SKILLS: Record<Category, Tech[]> = {
  Languages: [
    { name: 'JavaScript',  icon: `${DEVICON}/javascript/javascript-original.svg` },
    { name: 'TypeScript',  icon: `${DEVICON}/typescript/typescript-original.svg` },
    { name: 'Python',      icon: `${DEVICON}/python/python-original.svg` },
    { name: 'HTML5',       icon: `${DEVICON}/html5/html5-original.svg` },
    { name: 'CSS3',        icon: `${DEVICON}/css3/css3-original.svg` },
    { name: 'SQL',         icon: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg` },
  ],
  Frameworks: [
    { name: 'React',       icon: `${DEVICON}/react/react-original.svg` },
    { name: 'Next.js',     icon: `${DEVICON}/nextjs/nextjs-original.svg` },
    { name: 'Node.js',     icon: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: 'TailwindCSS', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    { name: 'Django',      icon: `${DEVICON}/django/django-plain.svg` },
    { name: 'Flask',       icon: `${DEVICON}/flask/flask-original.svg` },
    { name: 'Vite',        icon: `${DEVICON}/vitejs/vitejs-original.svg` },
  ],
  Databases: [
    { name: 'PostgreSQL',  icon: `${DEVICON}/postgresql/postgresql-original.svg` },
    { name: 'MySQL',       icon: `${DEVICON}/mysql/mysql-original.svg` },
    { name: 'MongoDB',     icon: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: 'Supabase',    icon: `${DEVICON}/supabase/supabase-original.svg` },
    { name: 'Firebase',    icon: `${DEVICON}/firebase/firebase-original.svg` },
  ],
  Tools: [
    { name: 'Git',            icon: `${DEVICON}/git/git-original.svg` },
    { name: 'GitHub',         icon: `${DEVICON}/github/github-original.svg` },
    { name: 'VS Code',        icon: `${DEVICON}/vscode/vscode-original.svg` },
    { name: 'Android Studio', icon: `${DEVICON}/androidstudio/androidstudio-original.svg` },
    { name: 'Linux',          icon: `${DEVICON}/linux/linux-original.svg` },
    { name: 'Postman',        icon: `${DEVICON}/postman/postman-original.svg` },
  ],
};

const TABS: Category[] = ['Languages', 'Frameworks', 'Databases', 'Tools'];

/* ── Single skill card ───────────────────────────────────────────── */
function SkillCard({ tech, index }: { tech: Tech; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-slate-200/50 bg-white/40 p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-slate-300/80 hover:bg-white/70 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-700/30 dark:bg-slate-800/30 dark:hover:border-slate-600/50 dark:hover:bg-slate-800/60 dark:hover:shadow-slate-950/50 sm:p-5"
    >
      {/* Animated gradient glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-blue-500/0 via-transparent to-purple-500/0 opacity-0 transition-opacity duration-400 group-hover:from-blue-500/8 group-hover:via-transparent group-hover:to-purple-500/8 group-hover:opacity-100 dark:group-hover:from-blue-500/12 dark:group-hover:to-purple-500/12" />

      {/* Icon container with enhanced hover effect */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          src={tech.icon}
          alt={tech.name}
          loading="lazy"
          className="h-10 w-10 object-contain drop-shadow-sm transition-all duration-400 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] sm:h-12 sm:w-12"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fb = document.createElement('div');
            fb.className =
              'flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 text-xs font-bold text-blue-700 dark:from-blue-900/40 dark:to-blue-800/40 dark:text-blue-300';
            fb.textContent = tech.name.slice(0, 2).toUpperCase();
            e.currentTarget.parentElement?.insertBefore(fb, e.currentTarget.nextSibling);
          }}
        />
      </div>

      {/* Tech name label */}
      <span className="relative z-10 w-full px-1 text-[0.7rem] font-semibold leading-snug text-slate-600 transition-colors duration-300 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-100 sm:text-xs">
        {tech.name}
      </span>
    </motion.li>
  );
}

/* ── Section ────────────────────────────────────────────────────────── */
export default function TechStack() {
  const [active, setActive] = useState<Category>('Languages');

  return (
    <section
      id="tech"
      className="relative overflow-hidden bg-white py-16 md:py-20 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-24 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl dark:bg-blue-500/5" />
      <div className="pointer-events-none absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-purple-100/20 blur-3xl dark:bg-purple-500/5" />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollAnimation>
          <div className="mb-12 text-center lg:mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400"
            >
              ✨ Expert Tools
            </motion.p>
            <h2 className="text-balance text-4xl font-bold text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              Technology{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                Stack
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
              A carefully curated collection of modern technologies and tools I use to build high-performance applications.
            </p>
          </div>
        </ScrollAnimation>

        {/* Main card container */}
        <ScrollAnimation delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/50 bg-gradient-to-br from-white/80 via-white/70 to-slate-50/50 p-6 backdrop-blur-2xl shadow-2xl shadow-slate-200/20 sm:p-8 dark:border-slate-700/30 dark:from-slate-800/60 dark:via-slate-800/50 dark:to-slate-900/50 dark:shadow-slate-950/40">
            
            {/* Premium border glow effect */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-500/10 dark:to-purple-500/10" />

            {/* Tab bar — modern segmented control */}
            <div className="mb-8 flex gap-2 rounded-xl bg-slate-100/50 p-1.5 backdrop-blur-sm dark:bg-slate-700/30 sm:mb-10 sm:gap-2">
              {TABS.map((tab) => (
                <motion.button
                  key={tab}
                  type="button"
                  onClick={() => setActive(tab)}
                  layoutId="activeTab"
                  className={`relative flex-1 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800 sm:px-4 sm:py-3 sm:text-sm ${
                    active === tab
                      ? 'text-white shadow-lg shadow-blue-500/30'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {active === tab && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-600 dark:to-blue-500"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </motion.button>
              ))}
            </div>

            {/* Skill grid with stagger animation */}
            <AnimatePresence mode="wait">
              <motion.ul
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5 lg:gap-5"
              >
                {SKILLS[active].map((tech, i) => (
                  <SkillCard key={tech.name} tech={tech} index={i} />
                ))}
              </motion.ul>
            </AnimatePresence>

          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
