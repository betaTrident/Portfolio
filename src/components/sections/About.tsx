'use client';

import dynamic from 'next/dynamic';
import { Code2, Cpu, Lightbulb, Calendar, FolderGit2, Layers } from 'lucide-react';
import ScrollAnimation from '@/components/common/ScrollAnimation';

// Three.js canvas – SSR must be disabled for WebGL
const AboutScene = dynamic(() => import('@/components/common/AboutScene'), { ssr: false });

const stats = [
  { icon: Calendar, value: '2+', label: 'Years Learning' },
  { icon: FolderGit2, value: '10+', label: 'Projects Built' },
  { icon: Layers, value: '15+', label: 'Technologies' },
];

const traits = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'End-to-end web apps — from pixel-perfect UIs to robust server-side APIs.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Cpu,
    title: 'Hardware & Software',
    description: 'I bridge the gap between circuits and code — both sides of the stack excite me.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem Solver',
    description: 'Complex challenges are just puzzles waiting for an elegant solution.',
    color: 'from-amber-400 to-orange-500',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-br from-white via-blue-50 to-slate-50 py-10 md:py-16 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-8 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900"
    >
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* ── 2-col layout on large screens ─────────────────────────── */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* LEFT COLUMN — text content */}
          <div className="flex-1 space-y-8">

            {/* Badge + heading */}
            <ScrollAnimation>
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
                Software Engineer
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-4xl xl:text-5xl">
                About{' '}
                <span className="text-blue-500 dark:text-blue-400">Me</span>
              </h2>
              <div className="mt-3 h-1.5 w-14 rounded-full bg-linear-to-r from-blue-500 to-blue-600" />
            </ScrollAnimation>

            {/* Bio */}
            <ScrollAnimation delay={0.15}>
              <div className="space-y-4">
                <p className="text-base leading-[1.85] text-slate-700 dark:text-slate-300">
                  I build{' '}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    real-world projects
                  </span>{' '}
                  that deliver{' '}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    innovative solutions
                  </span>
                  . My passion is diving deep into technology — exploring both the hardware and software
                  side to create meaningful applications that make a real difference.
                </p>
                <p className="text-base leading-[1.85] text-slate-700 dark:text-slate-300">
                  Whether I&apos;m building full-stack web apps or troubleshooting complex systems, I&apos;m
                  driven by the challenge of turning ideas into functional, impactful software. Clean code,
                  great UX, and continuous learning are my north stars.
                </p>
              </div>
            </ScrollAnimation>

            {/* Stats row */}
            <ScrollAnimation delay={0.25}>
              <div className="flex flex-wrap gap-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="flex flex-1 min-w-25 flex-col items-center gap-1 rounded-2xl border border-blue-100 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60"
                  >
                    <Icon size={18} className="text-blue-500 dark:text-blue-400" />
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">{value}</span>
                    <span className="text-center text-xs text-slate-500 dark:text-slate-400">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* RIGHT COLUMN — Three.js scene (hidden on mobile) */}
          <ScrollAnimation delay={0.1} className="hidden lg:block lg:w-95 xl:w-110">
              <div className="relative h-95 xl:h-110 w-full overflow-hidden rounded-3xl border border-blue-100/60 bg-white/40 shadow-2xl shadow-blue-200/30 backdrop-blur-sm dark:border-blue-500/10 dark:bg-slate-900/40 dark:shadow-blue-500/10">
              {/* Radial glow behind canvas */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-56 w-56 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
              </div>
              <AboutScene />
              {/* Corner label */}
              <div className="absolute bottom-4 right-4 rounded-lg bg-white/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-blue-600 backdrop-blur-sm dark:bg-slate-900/70 dark:text-blue-400">
                Interactive 3D
              </div>
            </div>
          </ScrollAnimation>

        </div>

        {/* ── Trait cards — full width below ───────────────────────── */}
        <ScrollAnimation delay={0.35}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {traits.map(({ icon: Icon, title, description, color }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-slate-700"
              >
                {/* Gradient bleed on hover */}
                <div
                  className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-linear-to-br ${color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                />
                <div
                  className={`mb-4 inline-flex rounded-xl bg-linear-to-br ${color} p-3 text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
