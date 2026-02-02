'use client';

import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-8 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="flex items-center gap-2 text-slate-400">
            Built with <Heart size={16} className="text-red-500" fill="currentColor" /> by John Developer
          </p>
          <p className="text-sm text-slate-500">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
