'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Cursor spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25), transparent 70%)`,
        }}
      />

      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-20 w-20 animate-float rounded-lg bg-blue-200/30 dark:bg-blue-500/10" style={{ transform: 'rotate(45deg)' }}></div>
        <div className="animation-delay-2000 absolute top-40 right-20 h-16 w-16 animate-float rounded-full bg-blue-300/40 dark:bg-blue-400/20"></div>
        <div className="animation-delay-4000 absolute bottom-32 left-1/4 h-12 w-12 animate-float rounded-lg bg-slate-300/30 dark:bg-slate-700/30"></div>
        <div className="animation-delay-2000 absolute bottom-20 right-1/3 h-24 w-24 animate-float rounded-full bg-blue-200/30 dark:bg-blue-500/10"></div>
        <div className="absolute top-1/3 right-10 h-14 w-14 animate-float rounded-lg bg-slate-200/40 dark:bg-slate-700/20" style={{ transform: 'rotate(30deg)' }}></div>
        <div className="animation-delay-4000 absolute bottom-1/3 left-20 h-18 w-18 animate-float rounded-full bg-blue-100/50 dark:bg-blue-600/10"></div>
        
        {/* Code/Dev elements */}
        <div className="absolute top-32 left-1/4 animate-float text-4xl font-bold text-blue-400/20 dark:text-blue-500/30">&lt;/&gt;</div>
        <div className="animation-delay-2000 absolute bottom-40 right-1/4 animate-float text-3xl font-mono text-slate-400/20 dark:text-slate-600/40">{'{ }'}</div>
        <div className="animation-delay-4000 absolute top-1/2 left-12 animate-float text-2xl font-mono text-blue-300/20 dark:text-blue-600/30">fn()</div>
        <div className="animation-delay-2000 absolute bottom-1/4 left-1/3 animate-float text-3xl font-mono text-slate-400/20 dark:text-slate-600/30">=&gt;</div>
        <div className="absolute top-2/3 right-20 animate-float text-2xl font-mono text-blue-400/20 dark:text-blue-500/30">[ ]</div>
        <div className="animation-delay-4000 absolute top-1/4 right-1/3 animate-float text-3xl font-bold text-slate-400/20 dark:text-slate-600/40">&lt;div/&gt;</div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        {/* Profile Photo */}
        <div className="animate-fade-in animation-delay-200 mb-8 flex justify-center">
          <div className="relative">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-500 bg-slate-200 shadow-xl dark:border-blue-600 dark:shadow-blue-500/50 dark:ring-4 dark:ring-blue-500/30">
              <img
                src="/colinaPortrait.jpg"
                alt="Kent Bryan Colina"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="flex h-full w-full items-center justify-center text-4xl font-bold text-slate-700 dark:text-slate-300">KB</div>';
                }}
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="animate-fade-in animation-delay-400 mb-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white md:text-6xl">
            Kent Bryan Colina
          </h1>
        </div>

        {/* Title Badge */}
        <div className="animate-fade-in animation-delay-600 mb-12 flex justify-center">
          <span className="inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Full Stack Developer & Tech Enthusiast
          </span>
        </div>

        {/* Main Tagline */}
        <div className="animate-slide-up animation-delay-800 mb-6 space-y-4">
          <h2 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            I build{' '}
            <span className="bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">scalable solutions</span>{' '}
            <span className="text-slate-900 dark:text-white">that drive</span> real business impact.
          </h2>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Transforming ideas into production-ready applications with modern technologies and best practices.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in animation-delay-1000 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="rounded-lg bg-blue-500 px-8 py-3 font-medium text-white transition-all hover:bg-blue-600 hover:shadow-lg"
          >
            Let's talk
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="rounded-lg border-2 border-slate-300 bg-white px-8 py-3 font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            My Projects
          </button>
        </div>
      </div>
    </section>
  );
}
