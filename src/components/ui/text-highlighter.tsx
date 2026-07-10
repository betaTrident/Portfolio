"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextHighlighterProps = {
  children: ReactNode;
  className?: string;
};

export function TextHighlighter({ children, className }: TextHighlighterProps) {
  const reduceMotion = useReducedMotion();

  return (
    <span className={cn("relative isolate inline-block px-1", className)}>
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[72%] origin-left -rotate-1 rounded-[0.2em] bg-accent-ai/20 dark:bg-accent-ai/25"
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </span>
  );
}
