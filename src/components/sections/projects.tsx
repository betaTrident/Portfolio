import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { getFeaturedProjects } from "@/lib/content";

export function Projects() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="section-label">02 / projects</h2>
        <Link
          href="/projects"
          className="group inline-flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent-ai"
        >
          all projects
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      <ProjectsGrid projects={projects} />
    </section>
  );
}
