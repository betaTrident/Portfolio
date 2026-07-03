import type { Metadata } from "next";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Kent Colina's stack across AI engineering, full-stack development, databases, infrastructure, and document intelligence.",
};

export default function StackPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <p className="section-label">05 / stack</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Stack
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          The tools I reach for across AI engineering, full-stack development,
          and infrastructure.
        </p>
      </div>

      <SkillsGrid categories={skills} />
    </div>
  );
}
