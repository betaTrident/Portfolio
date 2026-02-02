'use client';

import { Code2, Cpu, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 dark:bg-slate-900 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-12">
          {/* Header */}
          <div className="animate-fade-in text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
              About Me
            </h2>
            <div className="mx-auto h-1 w-16 bg-blue-500"></div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in animation-delay-200 mx-auto max-w-3xl">
            <p className="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              I build <span className="font-semibold text-blue-500">real-world projects</span> that provide <span className="font-semibold text-blue-500">real-world solutions</span>. My passion lies in diving deep into technology—exploring both the hardware and software side to create meaningful applications.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Whether it's developing full-stack web applications or troubleshooting complex systems, I'm driven by the challenge of turning ideas into functional, impactful solutions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Code2,
                title: 'Full-Stack Development',
                description: 'Building complete web solutions from frontend to backend',
              },
              {
                icon: Cpu,
                title: 'Hardware & Software',
                description: 'Passionate about both tech sides—from circuits to code',
              },
              {
                icon: Lightbulb,
                title: 'Free Thinker',
                description: 'Turning complex challenges into innovative solutions',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group animate-fade-in space-y-4 rounded-xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-blue-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="mx-auto inline-flex rounded-lg bg-blue-500/10 p-3 text-blue-500 transition-transform group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
