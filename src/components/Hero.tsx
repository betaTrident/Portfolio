'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-blob rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 animate-blob rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="animation-delay-4000 absolute top-1/2 left-1/2 h-80 w-80 animate-blob rounded-full bg-pink-500/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <div className="animate-fade-in-up">
          <p className="mb-4 text-lg font-medium text-purple-400 sm:text-xl">
            Hi, I'm
          </p>
          <h1 className="mb-6 bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
            John Developer
          </h1>
          <p className="mb-8 text-xl text-gray-300 sm:text-2xl md:text-3xl">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl">
            I craft beautiful, functional, and user-centric digital experiences.
            Specializing in modern web technologies and clean code.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative overflow-hidden rounded-full bg-purple-600 px-8 py-3 text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 z-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full border-2 border-white/20 px-8 py-3 text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 transition-colors hover:text-white"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
