'use client';

import { Code2, Palette, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful interfaces with attention to detail and user experience.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing applications for speed and seamless user interactions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams and communicating technical concepts clearly.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            About Me
          </h2>
          <div className="mx-auto h-1 w-20 bg-linear-to-r from-purple-600 to-pink-600"></div>
        </div>

        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              I'm a passionate developer with a love for creating elegant solutions to complex problems.
              With several years of experience in web development, I specialize in building modern,
              responsive applications that users love.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              My journey in tech started with curiosity and has evolved into a career dedicated to
              continuous learning and innovation. I believe in writing code that not only works but
              is also clean, efficient, and maintainable.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-purple-600/20 to-pink-600/20 blur-2xl"></div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-linear-to-br from-purple-600 to-pink-600 p-1">
              <div className="flex h-full items-center justify-center rounded-3xl bg-slate-800">
                <div className="text-center">
                  <Code2 size={120} className="mx-auto mb-4 text-white" />
                  <p className="text-xl font-semibold text-white">Your Photo Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-800"
              >
                <div className="mb-4 inline-block rounded-xl bg-linear-to-br from-purple-600 to-pink-600 p-3">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
