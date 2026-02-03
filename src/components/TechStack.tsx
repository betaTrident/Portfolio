'use client';

import { Code2, Database, Server, Cloud, Wrench, Smartphone } from 'lucide-react';

const techStack = [
  {
    name: 'Frontend Development',
    category: 'Frontend',
    proficiency: 'Expert',
    icon: Code2,
    description: 'React, JavaScript, TypeScript, Next.js, TailwindCSS, Vite',
    technologies: ['React', 'TypeScript', 'Next.js', 'TailwindCSS'],
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Backend Development',
    category: 'Backend',
    proficiency: 'Intermediate',
    icon: Server,
    description: 'Node.js, Python, Django, Flask, RESTful APIs',
    technologies: ['Node.js', 'Python', 'Django', 'APIs'],
    color: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Database Management',
    category: 'Database',
    proficiency: 'Intermediate',
    icon: Database,
    description: 'PostgreSQL, MySQL, MongoDB, Supabase, Firebase',
    technologies: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase'],
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Developer Tools',
    category: 'Tools & Workflow',
    proficiency: 'Advanced',
    icon: Wrench,
    description: 'Git, GitHub, VS Code, Android Studio, Docker basics',
    technologies: ['Git', 'GitHub', 'VS Code', 'Docker'],
    color: 'from-purple-400 to-pink-500',
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="animate-fade-in">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 dark:bg-blue-500/10">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                My Arsenal
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
              Technology Stack
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              A curated selection of tools and technologies I leverage to build scalable, efficient, and modern web applications.
            </p>
          </div>
        </div>

        {/* Tech Grid */}
        <section aria-label="Technology skills and expertise" className="grid gap-8 md:grid-cols-2">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group animate-fade-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:via-blue-500/30"></div>
              
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-blue-100/50 bg-white/80 p-8 shadow-lg shadow-blue-100/30 backdrop-blur-sm transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-200/40 dark:border-slate-800/50 dark:bg-slate-900/50 dark:shadow-slate-900/50 dark:hover:border-slate-700 dark:hover:shadow-blue-500/10">
                {/* Animated gradient background */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className={`h-full w-full bg-gradient-to-br ${tech.color} opacity-[0.03] dark:opacity-[0.05]`}></div>
                </div>

                <div className="relative space-y-6">
                  {/* Icon and Category */}
                  <div className="flex items-start justify-between">
                    {/* Icon with gradient background */}
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-20 blur-md transition-all duration-500 group-hover:opacity-30 group-hover:blur-lg`}></div>
                      <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tech.color} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl`}>
                        <tech.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <span className="rounded-full border border-blue-200/50 bg-blue-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-300 group-hover:bg-blue-100/80 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300 dark:group-hover:border-slate-600 dark:group-hover:bg-slate-700/50">
                      {tech.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="flex-1 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {tech.name}
                      </h3>
                      <span className="ml-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 text-xs font-bold text-white dark:from-blue-400 dark:to-blue-500">
                        {tech.proficiency}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {tech.description}
                    </p>
                    {/* Technology badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {tech.technologies.map((techName, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-blue-200/50 bg-blue-50/50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-blue-300"
                        >
                          {techName}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line with dot indicator */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${tech.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>
                    <div className={`h-1 w-0 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-700 group-hover:w-full`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
