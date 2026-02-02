'use client';

import { Code2, Database, Server, Cloud, Wrench, Smartphone } from 'lucide-react';

const techStack = [
  {
    name: 'Frontend Development',
    category: 'Frontend',
    icon: Code2,
    description: 'React, JavaScript, TypeScript, Next.js, TailwindCSS, Vite',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Backend Development',
    category: 'Backend',
    icon: Server,
    description: 'Node.js, Python, Django, Flask, RESTful APIs',
    color: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Database Management',
    category: 'Database',
    icon: Database,
    description: 'PostgreSQL, MySQL, MongoDB, Supabase, Firebase',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Developer Tools',
    category: 'Tools & Workflow',
    icon: Wrench,
    description: 'Git, GitHub, VS Code, Android Studio',
    color: 'from-purple-400 to-pink-500',
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="bg-white py-16 dark:bg-slate-950 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="animate-fade-in">
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              <span className="text-xs font-medium uppercase tracking-wider text-blue-500">
                My Arsenal
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              Technology Stack
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              A curated selection of tools and technologies I leverage to build scalable, efficient, and modern web applications.
            </p>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group animate-fade-in relative overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-white p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className={`h-full w-full bg-linear-to-br ${tech.color} opacity-5`}></div>
              </div>

              <div className="relative">
                {/* Icon and Category */}
                <div className="mb-4 flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${tech.color} shadow-lg transition-all duration-300 group-hover:scale-110`}>
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    {tech.category}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white dark:group-hover:text-blue-400">
                    {tech.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {tech.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-4 h-1 w-0 rounded-full bg-linear-to-r from-blue-500 to-blue-400 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
