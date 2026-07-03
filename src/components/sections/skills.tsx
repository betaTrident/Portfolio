import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="mb-10 flex flex-col gap-3">
        <div className="flex items-end justify-between gap-4">
          <h2 className="section-label">05 / skills</h2>
          <Link
            href="/stack"
            className="group inline-flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent-ai"
          >
            view all
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground">
          The tools I reach for across AI engineering, full-stack development,
          and infrastructure.
        </p>
      </div>

      <SkillsGrid categories={skills.slice(0, 4)} />
    </section>
  );
}
