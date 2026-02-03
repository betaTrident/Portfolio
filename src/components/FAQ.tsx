'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I specialize in full-stack web development, including frontend design with React and Next.js, backend development with Node.js and Python, and database design. I also help with project architecture and technical consulting.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while more complex applications could take 2-3 months. I\'ll provide a detailed estimate after discussing your requirements.'
  },
  {
    question: 'Do you work with existing codebases?',
    answer: 'Yes! I\'m experienced in working with legacy code, refactoring, performance optimization, and adding new features to existing projects. I follow best practices to ensure maintainability.'
  },
  {
    question: 'What\'s your availability for new projects?',
    answer: 'I\'m currently available for new projects. I prefer long-term partnerships but can also take on shorter freelance work. Contact me to discuss your specific needs.'
  },
  {
    question: 'How do you handle communication during projects?',
    answer: 'Clear communication is essential. I provide regular updates, am available for discussions, and use collaborative tools. We can establish a schedule that works best for you.'
  },
  {
    question: 'Do you offer support after project completion?',
    answer: 'Absolutely. I provide bug fixes, minor updates, and ongoing support after launch. Custom support packages can be arranged based on your needs.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-slate-50 py-20 md:py-32 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="animate-fade-in">
            <h2 className="mb-4 text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto h-1.5 w-16 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Find answers to common questions about my services and process.
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full rounded-xl border border-blue-100 bg-white p-6 text-left shadow-lg shadow-blue-100/50 transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-slate-700 dark:focus:ring-offset-slate-950"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-blue-500 transition-transform duration-300 dark:text-blue-400 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="animate-slide-down rounded-b-xl border-x border-b border-blue-100 bg-blue-50/50 p-6 dark:border-slate-800 dark:bg-slate-800/50"
                >
                  <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-blue-50/50 p-8 text-center dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/50">
          <p className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Didn't find your answer?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/50 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-600/50 dark:from-blue-500 dark:to-blue-600 dark:shadow-none dark:hover:shadow-blue-500/20"
          >
            Get in Touch
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
