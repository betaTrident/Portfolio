'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/components/common/ThemeProvider';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Tech', href: '#tech' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const themeContext = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navItems.map((item) => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) {
    return (
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/80">
        <div className="mx-auto flex h-12 items-center justify-center px-4 sm:px-6">
          <div className="flex items-center gap-6 sm:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-slate-600 transition-colors hover:text-slate-900 sm:text-sm dark:text-slate-400 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/80'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex h-12 items-center justify-center">
          {/* Navigation - Always horizontal, even on mobile */}
          <div className="flex items-center gap-6 sm:gap-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative text-xs font-medium transition-colors sm:text-sm ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  } focus:outline-none focus:text-blue-600 dark:focus:text-blue-400`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-500 dark:bg-blue-400" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
