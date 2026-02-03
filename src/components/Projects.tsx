'use client';

import UnderConstruction from './UnderConstruction';

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-br from-white via-slate-50 to-blue-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="animate-fade-in">
            <h2 className="mb-4 text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl">
              Featured Projects
            </h2>
            <div className="mx-auto h-1.5 w-16 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              A selection of my recent work and innovative side projects showcasing my expertise
            </p>
          </div>
        </div>

        <div className="animate-fade-in animation-delay-200">
          <UnderConstruction 
            title="Projects Coming Soon"
            message="I'm currently working on some exciting projects to showcase here. Stay tuned for updates!"
          />
        </div>
      </div>
    </section>
  );
}
