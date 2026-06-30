"use client";

import { useReducedMotion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <BlurFade
      className={className}
      inView
      inViewMargin="-80px"
      delay={delay}
      offset={8}
      blur="4px"
      duration={0.5}
    >
      {children}
    </BlurFade>
  );
}
