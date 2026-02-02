'use client';

import UnderConstruction from './UnderConstruction';

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-slate-950 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Featured Projects
          </h2>
          <div className="mx-auto h-1 w-16 bg-slate-900 dark:bg-white"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            A selection of my recent work and side projects
          </p>
        </div>

        <UnderConstruction 
          title="Projects Coming Soon"
          message="I'm currently working on some exciting projects to showcase here. Stay tuned for updates!"
        />
      </div>
    </section>
  );
}
