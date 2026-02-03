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
    <footer className="border-t border-blue-100 bg-gradient-to-br from-white via-slate-50 to-blue-50 py-12 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-8">
          {/* Divider */}
          <div className="mx-auto h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-slate-700"></div>

          {/* Content Grid */}
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {/* Brand Section */}
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Kent Bryan Colina
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Full-stack developer & tech enthusiast
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2 text-center">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                <a href="#about" className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                  About
                </a>
                <a href="#tech" className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                  Skills
                </a>
                <a href="#contact" className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 text-center md:text-right">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Connect
              </h4>
              <div className="flex justify-center gap-3 md:justify-end">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="rounded-lg border border-blue-100 bg-white p-2 text-slate-600 shadow-md shadow-blue-100/50 transition-all hover:border-blue-300 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:shadow-none dark:hover:border-slate-700 dark:hover:text-blue-400 dark:focus:ring-offset-slate-950"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

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
