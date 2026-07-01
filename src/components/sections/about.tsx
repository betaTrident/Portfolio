"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <Reveal className="flex max-w-2xl flex-col gap-6">
        <h2 className="section-label">01 / about</h2>

        <p className="text-lg leading-relaxed text-muted-foreground">
          I'm a full-stack engineer and AI engineer. I focus on building agentic systems, multi-agent pipelines,
          and AI-powered applications that turn messy workflows into structured
          software.My work focuses on turning complex ideas into practical systems, 
          from planning and architecture to implementation. I enjoy building solutions 
          that improve workflows, support real users, and create practical value for businesses.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="group inline-flex w-fit items-center gap-1.5 text-sm text-accent-ai transition-colors hover:text-accent-ai/80"
        >
          Currently open to opportunities
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </section>
  );
}
