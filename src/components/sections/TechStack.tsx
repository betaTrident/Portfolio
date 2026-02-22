'use client';

import { Code2, Database, Server, Cloud, Wrench, Smartphone } from 'lucide-react';
import ScrollAnimation from '@/components/common/ScrollAnimation';

const techStack = [
  {
    name: 'Frontend Development',
    icon: Code2,
    description: 'React, JavaScript, TypeScript, Next.js, TailwindCSS, Vite',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Backend Development',
    icon: Server,
    description: 'Node.js, Python, Django, Flask, RESTful APIs',
    color: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Database Management',
    icon: Database,
    description: 'PostgreSQL, MySQL, MongoDB, Supabase, Firebase',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Developer Tools',
    icon: Wrench,
    description: 'Git, GitHub, VS Code, Android Studio',
    color: 'from-purple-400 to-pink-500',
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="bg-linear-to-br from-slate-50 via-white to-blue-50 py-12 md:py-20 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              Technology Stack
            </h2>
            <div className="mx-auto h-1.5 w-16 bg-linear-to-r from-blue-500 to-blue-600"></div>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
              Tools and technologies I use to build modern web applications.
            </p>
          </div>
        </ScrollAnimation>

        {/* Tech Grid */}
        <ScrollAnimation delay={0.2}>
          <section aria-label="Technology skills and expertise" className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative"
              >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100 dark:via-blue-500/30"></div>
              
              {/* Card */}
              <div className="relative overflow-hidden rounded-xl border border-blue-100/50 bg-white/80 p-5 shadow-md shadow-blue-100/20 backdrop-blur-sm transition-all duration-500 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-200/30 dark:border-slate-800/50 dark:bg-slate-900/50 dark:shadow-slate-900/50 dark:hover:border-slate-700 dark:hover:shadow-blue-500/10">
                {/* Animated gradient background */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className={`h-full w-full bg-linear-to-br ${tech.color} opacity-[0.03] dark:opacity-[0.05]`}></div>
                </div>

                <div className="relative space-y-3">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3">
                    {/* Icon with gradient background */}
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-lg bg-linear-to-br ${tech.color} opacity-20 blur-sm transition-all duration-500 group-hover:opacity-30 group-hover:blur-md`}></div>
                      <div className={`relative flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br ${tech.color} shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                        <tech.icon className="h-5 w-5 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="flex-1 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {tech.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {tech.description}
                  </p>

                  {/* Bottom accent line with dot indicator */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className={`h-1 w-1 rounded-full bg-linear-to-r ${tech.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>
                    <div className={`h-0.5 w-0 rounded-full bg-linear-to-r ${tech.color} transition-all duration-700 group-hover:w-full`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        </ScrollAnimation>
      </div>
    </section>
  );
}

