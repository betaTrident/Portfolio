'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Tech', href: '#tech' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const themeContext = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  if (!mounted) {
    return (
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex h-12 items-center justify-center px-6">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Theme toggle temporarily hidden */}
        </div>
      </nav>
    );
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 shadow-sm backdrop-blur-md dark:bg-slate-950/80'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-6">
        <div className="flex h-12 items-center justify-center">
          {/* Desktop Navigation - Centered */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus:outline-none focus:text-blue-600 dark:text-slate-400 dark:hover:text-white dark:focus:text-blue-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Theme toggle - Absolute positioned */}
          {/* Theme toggle temporarily hidden */}

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme toggle temporarily hidden */}
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
          </div>
        </div>
      )}
    </nav>
  );
}
