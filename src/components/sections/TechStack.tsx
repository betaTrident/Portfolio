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

/* ── Single skill card (mirrors Mikhail's SkillCard) ───────────────── */
function SkillCard({ tech, index }: { tech: Tech; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
      className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 p-3 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/60 hover:bg-white hover:shadow-lg hover:shadow-blue-200/40 dark:border-slate-700/40 dark:bg-slate-800/50 dark:hover:border-blue-500/40 dark:hover:bg-slate-800 dark:hover:shadow-blue-500/20"
    >
      {/* Subtle inner glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/0 to-blue-400/0 opacity-0 transition-opacity duration-300 group-hover:from-blue-500/5 group-hover:to-blue-400/5 group-hover:opacity-100 dark:group-hover:from-blue-500/10 dark:group-hover:to-blue-400/10" />

      <img
        src={tech.icon}
        alt={tech.name}
        loading="lazy"
        className="relative z-10 h-9 w-9 object-contain drop-shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.45)] sm:h-11 sm:w-11"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const fb = document.createElement('span');
          fb.className =
            'flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
          fb.textContent = tech.name.slice(0, 2).toUpperCase();
          e.currentTarget.parentElement?.insertBefore(fb, e.currentTarget.nextSibling);
        }}
      />

      <span className="relative z-10 w-full wrap-break-word px-1 text-[0.65rem] font-medium leading-tight text-slate-500 transition-colors duration-300 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400 sm:text-xs">
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
      className="bg-linear-to-br from-slate-50 via-white to-blue-50 py-10 md:py-16 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-8 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">

        {/* Header */}
        <ScrollAnimation>
          <div className="mb-8 text-center lg:mb-6">
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.35em] text-blue-500 dark:text-blue-400">
              Skills
            </p>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white lg:text-4xl xl:text-5xl">
              Technology{' '}
              <span className="text-blue-500 dark:text-blue-400">Stack</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Technologies and tools I work with.
            </p>
          </div>
        </ScrollAnimation>

        {/* Frosted glass panel — matches Mikhail's card */}
        <ScrollAnimation delay={0.1}>
          <div className="flex flex-col gap-4 overflow-hidden rounded-3xl border border-slate-200/50 bg-white/60 p-4 shadow-xl shadow-blue-100/30 backdrop-blur-xl sm:gap-5 sm:p-6 dark:border-slate-700/40 dark:bg-slate-900/60 dark:shadow-blue-500/10">

            {/* Tab bar */}
            <div className="flex h-10 shrink-0 gap-1 rounded-full bg-slate-100/80 p-1 shadow-inner dark:bg-slate-800/80">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActive(tab)}
                  className={`relative flex-1 rounded-full px-2 py-1 text-xs font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:text-sm ${
                    active === tab
                      ? 'bg-linear-to-r from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/40 scale-105'
                      : 'text-slate-500 hover:bg-white/60 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-700/60 dark:hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Skill grid */}
            <AnimatePresence mode="wait">
              <motion.ul
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-3 gap-3 sm:gap-4"
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
