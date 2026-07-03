"use client";

import {
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { heroStats } from "@/data/stats";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function motionDelay(reduceMotion: boolean | null, ms: number) {
  return reduceMotion ? 0 : ms / 1000;
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="flex flex-col justify-center gap-10 py-16 md:min-h-[calc(100dvh-3.5rem)] md:py-24"
    >
      <div className="flex flex-col gap-6">
        <motion.p
          className="section-label"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          01 / Kent Bryan Colina
        </motion.p>

        <h1
          className="max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Full-Stack Developer
          <br />
          &amp; AI Engineer.
        </h1>

        <motion.p
          className="flex max-w-2xl flex-col gap-3 text-lg text-muted-foreground"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: motionDelay(reduceMotion, 200),
            ease: "easeOut",
          }}
        >
          <span>
            I build full-stack products and agentic AI systems - and I care how
            they&apos;re built: typed end to end, measured before shipped, fast
            enough that nobody thinks about it.
          </span>
          <span className="text-base text-muted-foreground/80">
            Right now I&apos;m deep in multi-agent pipelines and document
            intelligence, and I like being tested on it.
          </span>
        </motion.p>
      </div>

      <motion.div
        className="h-px w-full origin-left bg-border"
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.5,
          delay: motionDelay(reduceMotion, 300),
          ease: "easeOut",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="flex flex-col gap-4"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: motionDelay(reduceMotion, 400) }}
      >
        <p className="section-label !mb-0">Proven under pressure</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-1"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: motionDelay(reduceMotion, 400 + index * 80),
                ease: "easeOut",
              }}
            >
              <span className="font-mono text-sm font-medium text-accent-ai">
                {stat.value}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="h-px w-full origin-left bg-border"
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.5,
          delay: motionDelay(reduceMotion, 300),
          ease: "easeOut",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="flex flex-wrap gap-3"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: motionDelay(reduceMotion, 600),
          ease: "easeOut",
        }}
      >
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
        >
          GitHub
          <ArrowUpRight data-icon="inline-end" />
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
        >
          LinkedIn
          <ArrowUpRight data-icon="inline-end" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
        >
          Email
          <Mail data-icon="inline-end" />
        </a>
        <a
          href="/resume.pdf"
          download
          className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
        >
          Resume
          <Download data-icon="inline-end" />
        </a>
      </motion.div>
    </section>
  );
}
