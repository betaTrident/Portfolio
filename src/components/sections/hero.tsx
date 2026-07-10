import {
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { TextHighlighter } from "@/components/ui/text-highlighter";
import { heroStats } from "@/data/stats";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center gap-8 py-14 md:min-h-[calc(100dvh-3.5rem)] md:py-20"
    >
      <div className="flex flex-col gap-6">
        <p
          className="section-label hero-fade-in"
          style={{ animationDuration: "0.4s", animationDelay: "0ms" }}
        >
          01 / <TextHighlighter>Kent Bryan Colina</TextHighlighter>
        </p>

        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Full-Stack Developer
          <br />
          &amp; AI Engineer.
        </h1>

        <p
          className="hero-fade-in flex max-w-2xl flex-col gap-3 text-lg text-muted-foreground"
          style={{ animationDuration: "0.4s", animationDelay: "0.2s" }}
        >
          <span>
            I build full-stack products and agentic AI systems - and I care how
            they&apos;re built: typed end to end, measured before shipped, fast
            enough that nobody thinks about it.
          </span>
          <span className="text-base text-muted-foreground/80">
            Lately, I&apos;ve been exploring multi-agent pipelines and document
            intelligence, turning what I learn into practical, reliable tools.
          </span>
        </p>
      </div>

      <div
        className="hero-scale-x h-px w-full bg-border"
        style={{ animationDuration: "0.5s", animationDelay: "0.3s" }}
        aria-hidden="true"
      />

      <div
        className="hero-fade-in flex flex-col gap-4"
        style={{ animationDuration: "0.4s", animationDelay: "0.4s" }}
      >
        <p className="section-label mb-0!">Proven under pressure</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className="hero-fade-in-up flex flex-col gap-1"
              style={{
                animationDuration: "0.45s",
                animationDelay: `${0.4 + index * 0.08}s`,
              }}
            >
              <span className="font-mono text-sm font-medium text-accent-ai">
                {stat.value}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="hero-scale-x h-px w-full bg-border"
        style={{ animationDuration: "0.5s", animationDelay: "0.3s" }}
        aria-hidden="true"
      />

      <div
        className="hero-fade-in flex flex-wrap gap-3"
        style={{ animationDuration: "0.4s", animationDelay: "0.6s" }}
      >
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
        >
          GitHub
          <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
        >
          LinkedIn
          <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
        >
          Email
          <Mail data-icon="inline-end" aria-hidden="true" />
        </a>
        <a
          href="/resume.pdf"
          download
          className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
        >
          Resume
          <Download data-icon="inline-end" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
