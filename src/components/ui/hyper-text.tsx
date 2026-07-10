"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

type HyperTextProps = {
  children: string;
  className?: string;
  delay?: number;
};

export function HyperText({ children, className, delay = 350 }: HyperTextProps) {
  const reduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState(children);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayText(children);
      return;
    }

    let frame = 0;
    let interval: number | undefined;
    const startTimer = window.setTimeout(() => {
      interval = window.setInterval(() => {
        frame += 1;
        const resolved = Math.floor(frame / 2);

        setDisplayText(
          children
            .split("")
            .map((character, index) => {
              if (character === " " || index < resolved) return character;
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join("")
        );

        if (resolved >= children.length) {
          window.clearInterval(interval);
          setDisplayText(children);
        }
      }, 32);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, [children, delay, reduceMotion]);

  return (
    <span className={cn("inline-block", className)}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">{displayText}</span>
    </span>
  );
}
