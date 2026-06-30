"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { useClipboard } from "@/hooks/use-clipboard";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Contact() {
  const { copied, copy } = useClipboard(2000);

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <Reveal className="flex max-w-2xl flex-col gap-6">
        <h2 className="section-label">08 / contact</h2>

        <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something.
        </h3>

        <p className="text-lg text-muted-foreground">
          Whether you&apos;re working on an AI product, need a full-stack
          engineer, or want to talk about agentic systems — I&apos;m available.
        </p>

        <div className="relative w-fit">
          <button
            type="button"
            onClick={() => copy(siteConfig.email)}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-9 px-3 font-mono text-sm"
            )}
            aria-label={`Copy email address ${siteConfig.email}`}
          >
            {siteConfig.email}
          </button>
          {copied ? (
            <span
              role="status"
              className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md border border-border bg-popover px-2 py-1 font-mono text-xs text-popover-foreground shadow-sm"
            >
              Copied!
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3">
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
        </div>
      </Reveal>
    </section>
  );
}
