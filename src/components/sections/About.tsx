'use client';

import { Code2, Cpu, Lightbulb } from 'lucide-react';
import ScrollAnimation from '@/components/common/ScrollAnimation';

export default function About() {
  return (
    <section id="about" className="bg-linear-to-br from-white via-blue-50 to-slate-50 py-12 md:py-20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="space-y-8 sm:space-y-12">
          {/* Header */}
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                About Me
              </h2>
              <div className="mx-auto h-1.5 w-16 bg-linear-to-r from-blue-500 to-blue-600"></div>
            </div>
          </ScrollAnimation>

          {/* Main Content */}
          <ScrollAnimation delay={0.2}>
            <div className="mx-auto max-w-3xl">
              <p className="mb-6 text-base leading-[1.8] text-slate-700 dark:text-slate-300 sm:text-lg">
                I build <span className="font-semibold text-blue-600 dark:text-blue-500">real-world projects</span> that provide <span className="font-semibold text-blue-600 dark:text-blue-500">innovative solutions</span>. My passion lies in diving deep into technology—exploring both the hardware and software side to create meaningful applications that make a difference.
              </p>
              <p className="text-base leading-[1.8] text-slate-700 dark:text-slate-300 sm:text-lg">
                Whether it's developing full-stack web applications or troubleshooting complex systems, I'm driven by the challenge of turning ideas into functional, impactful solutions. I believe in writing clean, maintainable code and constantly learning new technologies to stay ahead.
              </p>
            </div>
          </ScrollAnimation>

          {/* Feature Cards */}
          <ScrollAnimation delay={0.4}>
            <section aria-label="Core expertise areas" className="grid gap-4 sm:gap-6 sm:grid-cols-3">
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
                  <article
                    key={index}
                    className="group space-y-4 rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-lg shadow-blue-100/50 transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200/50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:shadow-none dark:hover:border-blue-500/50 dark:focus-within:ring-offset-slate-950"
                  >
                  <div className="mx-auto inline-flex rounded-xl bg-linear-to-br from-blue-500 to-blue-600 p-3 text-white shadow-lg transition-transform group-hover:scale-110 dark:from-blue-500/10 dark:to-blue-600/10 dark:text-blue-500" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
                </article>
              );
            })}
          </section>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
