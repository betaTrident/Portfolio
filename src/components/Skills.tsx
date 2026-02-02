'use client';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 82 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Figma', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-white py-20 dark:bg-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Skills & Expertise
          </h2>
          <div className="mx-auto h-1 w-20 bg-linear-to-r from-purple-600 to-pink-600"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="rounded-2xl bg-slate-50 p-8 shadow-lg dark:bg-slate-900"
            >
              <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-purple-600 to-pink-600 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Always learning and exploring new technologies to stay at the forefront of development.
          </p>
        </div>
      </div>
    </section>
  );
}
