'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 shadow-sm backdrop-blur-md dark:bg-slate-950/80'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#');
            }}
            className="text-2xl font-bold text-slate-900 dark:text-white"
          >
            KB
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-700 transition-all hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href="/Colina-CV.pdf"
              download
              className="rounded-full bg-slate-900 px-6 py-2 text-white transition-all hover:scale-105 hover:shadow-lg dark:bg-white dark:text-slate-900"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-700 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="text-slate-700 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="space-y-1 px-6 pb-4 pt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-2 text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Colina-CV.pdf"
              download
              className="mt-2 block w-full rounded-full bg-slate-900 px-6 py-2 text-center text-white dark:bg-white dark:text-slate-900"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
