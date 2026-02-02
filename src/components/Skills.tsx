'use client';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Skills & Expertise
          </h2>
          <div className="mx-auto h-1 w-16 bg-slate-900 dark:bg-white"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-in space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex items-center gap-2 text-slate-700 transition-all dark:text-slate-300"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-white"></div>
                    <span className="transition-all group-hover:translate-x-1">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
