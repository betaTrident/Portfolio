"use client";

import { useMemo, useState } from "react";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

const categories = [
  "All",
  "AI System",
  "SaaS Product",
  "Client Build",
] as const;

type CategoryFilter = (typeof categories)[number];

type ProjectsFilterProps = {
  projects: Project[];
};

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [active, setActive] = useState<CategoryFilter>("All");

  const filtered = useMemo(() => {
    if (active === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-3 py-1 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              active === category
                ? "border-accent-ai/50 bg-accent-ai/10 text-accent-ai"
                : "border-border text-muted-foreground hover:border-border hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <ProjectsGrid projects={filtered} animateOnView={false} />
      ) : (
        <p className="text-sm text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
