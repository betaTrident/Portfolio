import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/icons/brand-icons";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="hero-fade-in grid gap-10 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-start" style={{ animationDuration: "0.5s", animationDelay: "0.7s" }}>
        <div className="flex max-w-2xl flex-col gap-6">
          <h2 className="section-label">01 / about</h2>

          <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a full-stack developer and AI engineer. Most of my work
              lives in three places: production software with real users -
              I helped build Peaksy and CourtHub as part of a small internship
              team at Symph, alongside a co-intern and a senior developer;
              point-of-sale systems I built solo for local businesses; and
              agentic AI, where I&apos;ve ranked top-64 of 1,920+ teams in the
              Reply AI Agent Challenge and reached the finals of two other
              global hackathons.
            </p>
            <p>
              What ties it together is how I build: small, legible systems,
              strict types, interfaces that respond instantly. I&apos;d rather
              ship one thing that holds up under inspection than five that
              don&apos;t.
            </p>
          </div>

          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex w-fit items-center gap-1.5 text-sm text-accent-ai transition-colors hover:text-accent-ai/80"
          >
            Currently open to opportunities
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="hidden flex-col gap-3 lg:flex">
          <Image
            src="/colinaPortrait.jpg"
            alt="Kent Colina"
            width={224}
            height={280}
            className="aspect-4/5 w-full rounded-md border border-border object-cover"
            priority={false}
          />
          <div className="flex flex-col gap-2">
          
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Kent Colina's GitHub profile"
              className="group inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-accent-ai/40 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <GithubIcon className="size-3.5 shrink-0" />
              <span>View GitHub</span>
              <ArrowUpRight className="size-3 shrink-0 -translate-x-0.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
