'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          ? 'bg-white/90 shadow-lg backdrop-blur-md dark:bg-slate-900/90'
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
            className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            JD
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
              >
                {item.name}
              </a>
            ))}
            <button className="rounded-full bg-linear-to-r from-purple-600 to-pink-600 px-6 py-2 text-white transition-all hover:shadow-lg hover:shadow-purple-500/50">
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="space-y-1 px-6 pb-4 pt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-2 text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
              >
                {item.name}
              </a>
            ))}
            <button className="mt-2 w-full rounded-full bg-linear-to-r from-purple-600 to-pink-600 px-6 py-2 text-white">
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
