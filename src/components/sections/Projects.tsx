'use client';

import { Github, ExternalLink, Star, Clock } from 'lucide-react';
import ScrollAnimation from '@/components/common/ScrollAnimation';

// ═══════════════════════════════════════════════════════════════════════
//  ADD YOUR PROJECTS HERE
//  Duplicate any entry below and fill in your own details.
//
//  Fields:
//    id*          – Unique number
//    title*       – Project name
//    description* – 1-2 sentence summary of what it does
//    tags*        – Tech stack used (displayed as pills)
//    gradient*    – Tailwind gradient classes for the header background
//    image        – Path to screenshot in /public/projects/ (optional)
//    github       – GitHub repo URL (leave '' to hide button)
//    live         – Live demo URL (leave '' to hide button)
//    featured     – Show ★ "Featured" badge (default false)
//    placeholder  – Set true while the project is coming soon (hides links)
// ═══════════════════════════════════════════════════════════════════════
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  placeholder?: boolean;
}

const projects: Project[] = [
  // ── Paste your real projects here when ready ──────────────────────
  // {
  //   id: 1,
  //   title: 'My Awesome Project',
  //   description:
  //     'Describe what the project does and the problem it solves in 1-2 sentences.',
  //   tags: ['React', 'TypeScript', 'Supabase', 'TailwindCSS'],
  //   gradient: 'from-blue-500 via-violet-500 to-purple-600',
  //   image: '/projects/my-project.png',
  //   github: 'https://github.com/betaTrident/my-project',
  //   live: 'https://my-project.vercel.app',
  //   featured: true,
  // },

  // ── Template placeholders (delete these once you add real ones) ───
  {
    id: 1,
    title: 'Full-Stack Web App',
    description:
      'A production-ready full-stack application with authentication, database, and a clean modern UI.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
    gradient: 'from-blue-500 via-blue-600 to-indigo-700',
    github: '',
    live: '',
    featured: true,
    placeholder: true,
  },
  {
    id: 2,
    title: 'REST API Service',
    description:
      'A scalable RESTful API built with Node.js, featuring JWT authentication and PostgreSQL persistence.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    github: '',
    live: '',
    placeholder: true,
  },
  {
    id: 3,
    title: 'Mobile-First Dashboard',
    description:
      'An analytics dashboard with real-time data visualisation, dark mode, and responsive layouts.',
    tags: ['React', 'Python', 'Django', 'Chart.js'],
    gradient: 'from-violet-500 via-purple-600 to-pink-600',
    github: '',
    live: '',
    placeholder: true,
  },
];

/* ── Individual project card ─────────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800/60 dark:bg-slate-900 dark:hover:shadow-slate-900/60">

      {/* Image / gradient header */}
      <div className={`relative h-44 w-full bg-linear-to-br ${project.gradient} overflow-hidden`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Decorative pattern when no screenshot */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-6 gap-2 opacity-20">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="h-5 w-5 rounded-sm bg-white/60" />
              ))}
            </div>
            <div className="absolute text-4xl font-black tracking-tighter text-white/20 select-none">
              {'</>'}
            </div>
          </div>
        )}

        {/* Badges row */}
        <div className="absolute left-3 top-3 flex gap-2">
          {project.featured && (
            <span className="flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-900 shadow">
              <Star size={10} fill="currentColor" /> Featured
            </span>
          )}
          {project.placeholder && (
            <span className="flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              <Clock size={10} /> Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tag pills */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action links */}
        {!project.placeholder && (project.github || project.live) && (
          <div className="flex gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Github size={15} /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/* ── Section ─────────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-linear-to-br from-white via-slate-50 to-blue-50 py-10 md:py-16 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-8 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <ScrollAnimation>
          <div className="mb-10 text-center lg:mb-8">
            <h2 className="mb-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-4xl xl:text-6xl">
              Featured{' '}
              <span className="text-blue-500 dark:text-blue-400">Projects</span>
            </h2>
            <div className="mx-auto h-1.5 w-14 rounded-full bg-linear-to-r from-blue-500 to-blue-600" />
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              A selection of my recent work and side projects.
            </p>
          </div>
        </ScrollAnimation>

        {/* Project cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollAnimation key={project.id} delay={i * 0.1} className="flex">
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>

        {/* "More projects on GitHub" link */}
        <ScrollAnimation delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/betaTrident"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <Github size={16} />
              See more on GitHub
              <ExternalLink size={13} className="opacity-50 transition-opacity group-hover:opacity-100" />
            </a>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
}
