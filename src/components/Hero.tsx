'use client';

import { ArrowDown, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
      {/* Minimalistic animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-float rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/20"></div>
        <div className="animation-delay-2000 absolute bottom-1/4 right-1/4 h-96 w-96 animate-float rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/20"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32">
        <div className="animate-fade-in space-y-8">
          <div className="space-y-2">
            <p className="animate-slide-down text-sm font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Hello, I'm
            </p>
            <h1 className="animate-slide-up text-6xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl md:text-8xl lg:text-9xl">
              Kent Bryan
            </h1>
            <h1 className="animate-slide-up animation-delay-200 text-6xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl md:text-8xl lg:text-9xl">
              Colina
            </h1>
          </div>

          <p className="animate-fade-in animation-delay-400 max-w-2xl text-xl text-slate-600 dark:text-slate-400 md:text-2xl">
            Full Stack Developer crafting elegant digital experiences with modern technologies
          </p>

          <div className="animate-fade-in animation-delay-600 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative overflow-hidden rounded-full bg-slate-900 px-8 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-xl dark:bg-white dark:text-slate-900"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full border-2 border-slate-900 px-8 py-3 font-medium text-slate-900 transition-all hover:bg-slate-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900"
            >
              Get In Touch
            </button>
          </div>

          <div className="animate-fade-in animation-delay-800 flex gap-4">
            <a href="https://www.linkedin.com/in/kent-colina/" target="_blank" rel="noopener noreferrer" className="text-slate-600 transition-all hover:scale-110 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/betaTrident" target="_blank" rel="noopener noreferrer" className="text-slate-600 transition-all hover:scale-110 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.instagram.com/kiboooooy/" target="_blank" rel="noopener noreferrer" className="text-slate-600 transition-all hover:scale-110 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/kbcolina10" target="_blank" rel="noopener noreferrer" className="text-slate-600 transition-all hover:scale-110 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" aria-label="Facebook">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        <div className="mt-20 animate-bounce-slow">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
