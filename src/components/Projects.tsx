'use client';

import UnderConstruction from './UnderConstruction';
import ScrollAnimation from './ScrollAnimation';

export default function Projects() {
  return (
    <section id="projects" className="bg-linear-to-br from-white via-slate-50 to-blue-50 py-12 md:py-20 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollAnimation>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl">
              Featured Projects
            </h2>
            <div className="mx-auto h-1.5 w-16 bg-linear-to-r from-blue-500 to-blue-600"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              A selection of my recent work and innovative side projects showcasing my expertise
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <UnderConstruction 
            title="Projects Coming Soon"
            message="I'm currently working on some exciting projects to showcase here. Stay tuned for updates!"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}
