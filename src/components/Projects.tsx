'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team collaboration features, and analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool leveraging GPT models to create high-quality written content for various purposes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'Supabase'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with detailed forecasts, interactive maps, and personalized weather alerts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    tags: ['React', 'Weather API', 'Chart.js', 'CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Social Media Analytics',
    description: 'Comprehensive analytics dashboard for social media metrics with data visualization and reporting features.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Portfolio Builder',
    description: 'No-code portfolio builder with drag-and-drop interface, customizable templates, and built-in hosting.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    tags: ['Next.js', 'React DnD', 'Firebase', 'Vercel'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Featured Projects
          </h2>
          <div className="mx-auto h-1 w-20 bg-linear-to-r from-purple-600 to-pink-600"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-800"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-all hover:bg-slate-100"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-purple-700"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
