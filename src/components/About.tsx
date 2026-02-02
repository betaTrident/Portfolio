'use client';

import { Code2, Sparkles, Zap, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-slate-950 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
                About Me
              </h2>
              <div className="h-1 w-16 bg-slate-900 dark:bg-white"></div>
            </div>

            <div className="animate-fade-in animation-delay-200 space-y-4 text-lg text-slate-600 dark:text-slate-400">
              <p>
                I'm a passionate full-stack developer focused on building clean, efficient, and
                user-friendly web applications. I love turning complex problems into simple,
                beautiful solutions.
              </p>
              <p>
                With expertise in modern web technologies, I create seamless digital experiences
                that combine functionality with aesthetics. My approach emphasizes clean code,
                attention to detail, and continuous learning.
              </p>
              <p>
                When I'm not coding, I explore new technologies, contribute to open-source projects,
                and share knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Code2,
                title: 'Clean Code',
                description: 'Writing maintainable and scalable solutions',
              },
              {
                icon: Sparkles,
                title: 'Modern Design',
                description: 'Creating beautiful user experiences',
              },
              {
                icon: Zap,
                title: 'Performance',
                description: 'Optimizing for speed and efficiency',
              },
              {
                icon: Target,
                title: 'Best Practices',
                description: 'Following industry standards',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group animate-fade-in space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="inline-block rounded-lg bg-slate-900 p-3 text-white transition-transform group-hover:scale-110 dark:bg-white dark:text-slate-900">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
