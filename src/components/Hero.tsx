'use client';

import { Github, Linkedin, Instagram, Facebook, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      {/* Decorative dots background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-500/20 dark:bg-teal-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float text-4xl font-bold text-blue-400/20 dark:text-teal-500/30">&lt;/&gt;</div>
        <div className="animation-delay-2000 absolute top-40 right-20 animate-float text-3xl font-mono text-slate-400/20 dark:text-slate-600/40">{'{ }'}</div>
        <div className="animation-delay-4000 absolute bottom-32 left-1/4 animate-float text-2xl font-mono text-blue-300/20 dark:text-teal-600/30">fn()</div>
        <div className="animation-delay-2000 absolute bottom-20 right-1/3 animate-float text-3xl font-mono text-slate-400/20 dark:text-slate-600/30">=&gt;</div>
        <div className="absolute top-1/2 right-10 animate-float text-2xl font-mono text-blue-400/20 dark:text-teal-500/30">[ ]</div>
        <div className="animation-delay-4000 absolute top-1/3 left-1/3 animate-float text-3xl font-bold text-slate-400/20 dark:text-slate-600/40">&lt;div/&gt;</div>
        <div className="animation-delay-2000 absolute bottom-40 left-20 animate-float text-2xl font-mono text-blue-300/20 dark:text-teal-600/30">( )</div>
        <div className="absolute top-2/3 left-1/2 animate-float text-3xl font-mono text-slate-400/20 dark:text-slate-600/40">&#123;&#125;</div>
        <div className="animation-delay-4000 absolute top-1/4 right-1/4 animate-float text-2xl font-mono text-blue-400/20 dark:text-teal-500/30">&lt;/&gt;</div>
        <div className="animation-delay-2000 absolute bottom-1/3 right-20 animate-float text-3xl font-bold text-slate-400/20 dark:text-slate-600/40">const</div>
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Label */}
          <div className="animate-fade-in">
            <span className="text-sm font-medium text-blue-500 dark:text-teal-400">
              Full Stack Developer • Tech Enthusiast
            </span>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in animation-delay-200">
            <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-5xl">
              I build{' '}
              <span className="text-blue-500 dark:text-teal-400">scalable solutions</span>{' '}
              that drive real{' '}
              <span className="italic text-blue-500 dark:text-teal-400">business impact.</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fade-in animation-delay-400">
            <p className="max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Transforming ideas into production-ready applications with modern technologies and best practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in animation-delay-600 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400 dark:hover:shadow-teal-500/30"
            >
              Let's Talk
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="/Colina-CV.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-8 py-4 font-semibold text-slate-900 transition-all hover:border-blue-500 hover:bg-slate-100 dark:border-slate-700 dark:bg-transparent dark:text-white dark:hover:border-teal-500 dark:hover:bg-slate-900"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in animation-delay-800 flex items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-500">Follow me:</p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/betaTrident', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/kent-colina/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/kiboooooy/', label: 'Instagram' },
                { icon: Facebook, href: 'https://www.facebook.com/kbcolina10', label: 'Facebook' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-lg p-2 text-slate-600 transition-all hover:bg-slate-100 hover:text-blue-500 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-teal-400"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="animate-fade-in animation-delay-400 relative flex items-center justify-center lg:justify-end">
          <div className="relative">
            {/* Glow effect background */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent blur-3xl dark:from-teal-500/20 dark:via-teal-400/10"></div>
            
            {/* Profile Image Container */}
            <div className="group relative overflow-hidden rounded-3xl border border-blue-200/30 bg-gradient-to-br from-white/80 via-blue-50/20 to-slate-50/50 p-2 shadow-2xl shadow-blue-500/5 backdrop-blur-sm transition-all duration-500 hover:border-blue-300/50 hover:shadow-3xl hover:shadow-blue-500/10 dark:border-teal-500/20 dark:from-slate-900/50 dark:via-slate-900/30 dark:to-slate-800/40 dark:shadow-teal-500/10 dark:hover:border-teal-500/40 dark:hover:shadow-teal-500/20">
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-400/0 via-blue-500/20 to-blue-600/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:from-teal-400/0 dark:via-teal-500/20 dark:to-teal-600/0"></div>
              
              {/* Inner accent overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-teal-500/10"></div>
              
              <div className="relative h-[500px] w-[380px] overflow-hidden rounded-2xl ring-1 ring-blue-100/50 shadow-lg transition-all duration-500 group-hover:ring-blue-200/80 dark:ring-teal-500/10 dark:group-hover:ring-teal-500/30">
                <img
                  src="/colinaPortrait.jpg"
                  alt="Kent Bryan Colina"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-6xl font-bold text-slate-700 dark:text-slate-300">KB</div>';
                  }}
                />
              </div>
            </div>

            {/* Available Badge */}
            <div className="absolute -bottom-6 right-0 z-10 flex items-center gap-3 rounded-2xl border border-blue-200/60 bg-white/95 px-6 py-3 shadow-xl shadow-blue-500/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue-300/80 hover:shadow-2xl hover:shadow-blue-500/20 dark:border-teal-500/30 dark:bg-slate-900/95 dark:shadow-teal-500/10 dark:hover:border-teal-500/50 dark:hover:shadow-teal-500/20">
              <div className="relative h-3 w-3">
                <div className="absolute h-3 w-3 animate-pulse rounded-full bg-blue-500 dark:bg-teal-400"></div>
                <div className="absolute h-3 w-3 animate-ping rounded-full bg-blue-500 opacity-75 dark:bg-teal-400"></div>
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Available for work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
