// Example custom hooks you can add to your project
// Place these files in src/hooks/

// ==========================================
// useMediaQuery.ts
// ==========================================
// import { useState, useEffect } from 'react';
//
// export function useMediaQuery(query: string): boolean {
//   const [matches, setMatches] = useState(false);
//
//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     media.addEventListener('change', listener);
//     return () => media.removeEventListener('change', listener);
//   }, [matches, query]);
//
//   return matches;
// }

// ==========================================
// useLocalStorage.ts
// ==========================================
// import { useState, useEffect } from 'react';
//
// export function useLocalStorage<T>(key: string, initialValue: T) {
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     if (typeof window === 'undefined') return initialValue;
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.error(error);
//       return initialValue;
//     }
//   });
//
//   const setValue = (value: T | ((val: T) => T)) => {
//     try {
//       const valueToStore = value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       if (typeof window !== 'undefined') {
//         window.localStorage.setItem(key, JSON.stringify(valueToStore));
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//
//   return [storedValue, setValue] as const;
// }

// ==========================================
// useIntersectionObserver.ts
// ==========================================
// import { useEffect, useState, RefObject } from 'react';
//
// export function useIntersectionObserver(
//   elementRef: RefObject<Element>,
//   options?: IntersectionObserverInit
// ): boolean {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//
//   useEffect(() => {
//     const element = elementRef.current;
//     if (!element) return;
//
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsIntersecting(entry.isIntersecting);
//     }, options);
//
//     observer.observe(element);
//     return () => observer.disconnect();
//   }, [elementRef, options]);
//
//   return isIntersecting;
// }
