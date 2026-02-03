'use client';

import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kent-colina/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/betaTrident', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/kiboooooy/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/kbcolina10', label: 'Facebook' },
  ];

  return (
    <footer className="border-t border-blue-100 bg-linear-to-br from-white via-slate-50 to-blue-50 py-12 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-8">
          {/* Divider */}

        

          {/* Bottom Copyright */}
          <div className="border-t border-slate-200 pt-8 text-center dark:border-slate-800">
            <p className="text-xs text-slate-600 dark:text-slate-400">
              © {currentYear} Kent Bryan Colina. Building since August 2023. Crafted with passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
