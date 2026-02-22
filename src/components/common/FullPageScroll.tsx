'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * FullPageScroll — Ultra-smooth, section-based scrolling.
 * One wheel tick or arrow key press = one section transition.
 * Uses requestAnimationFrame with ease-in-out quart easing for a
 * buttery-smooth feel without any external library.
 *
 * Only active on devices with a fine pointer (mouse / trackpad).
 * Mobile touch scrolling remains native.
 */
export default function FullPageScroll() {
  const canScroll = useRef(true);
  const animationId = useRef<number | null>(null);

  /* ---- helpers ---- */

  const getSections = useCallback((): HTMLElement[] => {
    return Array.from(document.querySelectorAll('main > section'));
  }, []);

  /** Determine the index of the section currently in view. */
  const getCurrentIndex = useCallback((): number => {
    const sections = getSections();
    const scrollY = window.scrollY;
    const navHeight = 48; // fixed navbar h-12
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    // If we're at the very bottom (footer visible) return a virtual index
    if (scrollY >= maxScroll - 20) return sections.length;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollY >= sections[i].offsetTop - navHeight - 50) {
        return i;
      }
    }
    return 0;
  }, [getSections]);

  /** Animate to a given section index (or footer when index === sections.length). */
  const scrollToIndex = useCallback(
    (index: number) => {
      const sections = getSections();

      let targetY: number;
      if (index <= 0) {
        targetY = 0;
      } else if (index >= sections.length) {
        // Scroll just enough to reveal the footer
        targetY =
          document.documentElement.scrollHeight - window.innerHeight;
      } else {
        const navHeight = 48;
        targetY = sections[index].offsetTop - navHeight;
      }

      const startY = window.scrollY;
      const diff = targetY - startY;

      if (Math.abs(diff) < 5) {
        canScroll.current = true;
        return;
      }

      const duration = 700; // ms – sweet spot for smooth & snappy
      let startTime: number | null = null;

      // Ease-in-out quart — gentle start, swift middle, soft landing
      const ease = (t: number): number =>
        t < 0.5
          ? 8 * t * t * t * t
          : 1 - Math.pow(-2 * t + 2, 4) / 2;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, startY + diff * ease(progress));

        if (progress < 1) {
          animationId.current = requestAnimationFrame(step);
        } else {
          window.scrollTo(0, targetY);
          animationId.current = null;
          // Short buffer so trackpad momentum events don't re-trigger
          setTimeout(() => {
            canScroll.current = true;
          }, 300);
        }
      };

      canScroll.current = false;
      if (animationId.current) cancelAnimationFrame(animationId.current);
      animationId.current = requestAnimationFrame(step);
    },
    [getSections],
  );

  /* ---- event listeners (desktop only) ---- */

  useEffect(() => {
    // Skip on touch-primary devices (phones / tablets)
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!canScroll.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const current = getCurrentIndex();
      const target = current + direction;
      const sections = getSections();
      if (target < 0 || target > sections.length) return;

      scrollToIndex(target);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!canScroll.current) return;
      const tag = (e.target as HTMLElement).tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;

      let direction = 0;
      if (['ArrowDown', 'PageDown'].includes(e.key)) direction = 1;
      if (['ArrowUp', 'PageUp'].includes(e.key)) direction = -1;
      if (!direction) return;

      e.preventDefault();
      const current = getCurrentIndex();
      const target = current + direction;
      const sections = getSections();
      if (target < 0 || target > sections.length) return;

      scrollToIndex(target);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (animationId.current) cancelAnimationFrame(animationId.current);
    };
  }, [getCurrentIndex, getSections, scrollToIndex]);

  return null; // behaviour-only component — no UI
}
