'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FullPageWrapperProps {
  children: React.ReactNode;
  enableAtWidth?: number;
  onSectionChange?: (index: number) => void;
}

const SECTIONS = ['hero', 'about', 'tech', 'projects', 'contact'];
const SECTION_NAMES = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export default function FullPageWrapper({
  children,
  enableAtWidth = 1024,
  onSectionChange,
}: FullPageWrapperProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const lastWheelTime = useRef(0);

  // Check if fullpage scroll should be enabled (desktop only)
  useEffect(() => {
    const checkWidth = () => {
      const shouldEnable = window.innerWidth >= enableAtWidth;
      setIsEnabled(shouldEnable);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, [enableAtWidth]);

  // Show navigation after scrolling past first section
  useEffect(() => {
    setShowNav(currentSection > 0);
  }, [currentSection]);
                                                
  // Scroll to section with ultra-smooth animation
  const scrollToSection = useCallback(
    (index: number) => {
      if (!isEnabled || isAnimating) return;

      const clampedIndex = Math.max(0, Math.min(index, SECTIONS.length - 1));
      if (clampedIndex === currentSection) return;

      setIsAnimating(true);
      setCurrentSection(clampedIndex);
      onSectionChange?.(clampedIndex);

      const section = document.getElementById(SECTIONS[clampedIndex]);
      if (section) {
        const navHeight = 48; // h-12
        const targetY = section.offsetTop - navHeight;

        // Ultra-smooth scroll with custom easing
        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = 600; // Responsive yet smooth
        let startTime: number | null = null;

        // Ease-in-out cubic for snappy responsiveness
        const easeInOutCubic = (t: number): number => {
          return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          window.scrollTo(0, startY + distance * easeInOutCubic(progress));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Cooldown period to prevent rapid successive scrolls
            setTimeout(() => setIsAnimating(false), 150);
          }
        };

        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    },
    [isEnabled, isAnimating, currentSection, onSectionChange],
  );

  // Wheel event handler with momentum detection
  useEffect(() => {
    if (!isEnabled) return;

    const handleWheel = (e: WheelEvent) => {
      // Allow Ctrl+Scroll (browser zoom) to pass through
      if (e.ctrlKey) return;
      e.preventDefault();

      const now = Date.now();
      const timeSinceLastWheel = now - lastWheelTime.current;

      // Debounce: ignore rapid wheel events (momentum scrolling)
      if (timeSinceLastWheel < 50) return;

      lastWheelTime.current = now;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < SECTIONS.length) {
        scrollToSection(nextSection);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isEnabled, currentSection, scrollToSection]);

  // Touch event handlers for mobile swipe
  useEffect(() => {
    if (!isEnabled) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      // Minimum swipe distance
      if (Math.abs(diff) > 50) {
        const direction = diff > 0 ? 1 : -1;
        const nextSection = currentSection + direction;

        if (nextSection >= 0 && nextSection < SECTIONS.length) {
          scrollToSection(nextSection);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isEnabled, currentSection, scrollToSection]);

  // Keyboard navigation
  useEffect(() => {
    if (!isEnabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;

      let direction = 0;
      if (['ArrowDown', 'PageDown', 'Space'].includes(e.key)) direction = 1;
      if (['ArrowUp', 'PageUp'].includes(e.key)) direction = -1;

      if (direction !== 0) {
        e.preventDefault();
        const nextSection = currentSection + direction;
        if (nextSection >= 0 && nextSection < SECTIONS.length) {
          scrollToSection(nextSection);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnabled, currentSection, scrollToSection]);

  return (
    <>
      {/* Navigation Dots - Hidden */}
      {/* <AnimatePresence>
        {isEnabled && showNav && (
          <motion.nav>...</motion.nav>
        )}
      </AnimatePresence> */}

      {/* Content */}
      <div ref={containerRef}>{children}</div>
    </>
  );
}
