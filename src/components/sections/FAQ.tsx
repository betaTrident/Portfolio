'use client';

import UnderConstruction from '@/components/ui/UnderConstruction';

export default function FAQ() {
  return (
    <section id="faq" className="bg-linear-to-br from-white via-blue-50 to-slate-50 py-20 md:py-32 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto h-1 w-16 bg-slate-900 dark:bg-white"></div>
        </div>

        <UnderConstruction 
          title="FAQ Coming Soon"
          message="I'm currently working on compiling the most commonly asked questions. Check back soon!"
        />
      </div>
    </section>
  );
}
