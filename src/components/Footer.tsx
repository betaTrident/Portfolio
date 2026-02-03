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
    <footer className="border-t border-blue-100 bg-gradient-to-br from-white via-slate-50 to-blue-50 py-8 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          {/* Social Links */}
          <div className="flex gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-lg border border-blue-100 bg-white p-2 text-slate-600 shadow-md shadow-blue-100/50 transition-all hover:border-blue-300 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-200/50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:shadow-none dark:hover:border-slate-700 dark:hover:text-blue-400"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-slate-600 dark:text-slate-400">
            © {currentYear} Kent Bryan Colina. Building since August 2023.
          </p>
        </div>
      </div>
    </footer>
  );
}
