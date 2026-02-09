'use client';

import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-4 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12 dark:from-blue-500 dark:to-blue-600 dark:shadow-none dark:hover:shadow-blue-500/20 dark:focus:ring-offset-slate-950">
      <ChevronUp size={18} className="sm:hidden" />
      <ChevronUp size={20} className="hidden sm:block" />
    </button>
  );
}
