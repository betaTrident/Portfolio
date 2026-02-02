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
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
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
                  className="rounded-lg p-2 text-slate-600 transition-all hover:bg-slate-100 hover:text-blue-500 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-blue-400"
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
