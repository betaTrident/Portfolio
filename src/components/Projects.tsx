'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with real-time inventory and payment processing.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team features.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool leveraging GPT models for high-quality content.',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'Supabase'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with detailed forecasts and interactive maps.',
    tags: ['React', 'Weather API', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Social Analytics',
    description: 'Comprehensive analytics dashboard for social media metrics and reporting.',
    tags: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Portfolio Builder',
    description: 'No-code portfolio builder with drag-and-drop interface and customizable templates.',
    tags: ['Next.js', 'React DnD', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-slate-900 p-3 dark:bg-white">
                  <Code size={24} className="text-white dark:text-slate-900" />
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-slate-600 transition-all hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-slate-600 transition-all hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                    aria-label="Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Code({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}
