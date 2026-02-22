'use client';

import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kent-colina/', label: 'LinkedIn', color: 'hover:bg-blue-500' },
    { icon: Github, href: 'https://github.com/betaTrident', label: 'GitHub', color: 'hover:bg-slate-800 dark:hover:bg-slate-700' },
    { icon: Instagram, href: 'https://www.instagram.com/kiboooooy/', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Facebook, href: 'https://www.facebook.com/kbcolina10', label: 'Facebook', color: 'hover:bg-blue-600' },
  ];

  return (
    <footer className="border-t border-slate-200/50 bg-transparent py-6 dark:border-slate-700/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="space-y-6">
          {/* Social Links */}
          <div className="flex justify-center">
            <div className="flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`group flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200/60 bg-slate-50/80 text-slate-700 backdrop-blur-sm transition-all hover:scale-110 hover:border-transparent hover:text-white hover:shadow-md dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300 ${social.color}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 text-center">
            <p className="text-xs text-slate-600 dark:text-slate-400">
              © {currentYear} Kent Bryan Colina. Building since 2023. Crafted with passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
