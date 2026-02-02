'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {currentYear} Kent Bryan Colina. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
