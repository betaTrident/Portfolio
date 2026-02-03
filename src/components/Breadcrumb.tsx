'use client';

import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  id: string;
}

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Tech Stack', id: 'tech' },
  { label: 'Projects', id: 'projects' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
];

export default function Breadcrumb() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = breadcrumbItems.map(item => 
        document.getElementById(item.id)
      ).filter(Boolean) as HTMLElement[];

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200) {
          const sectionId = section.id || 'home';
          setActiveSection(sectionId);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      aria-label="Page sections"
      className="fixed left-0 right-0 top-20 z-40 hidden border-b border-blue-100 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80 lg:block"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-1 overflow-x-auto py-3 text-sm">
          {breadcrumbItems.map((item, index) => (
            <div key={item.id} className="flex items-center gap-1 whitespace-nowrap">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? 'font-semibold text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
              {index < breadcrumbItems.length - 1 && (
                <ChevronRight size={16} className="text-slate-300 dark:text-slate-700" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
