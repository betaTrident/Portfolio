import { ProjectsFilter } from "@/components/projects/projects-filter";
import { getProjects } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description:
    "AI systems, SaaS products, and client builds — case studies from Kent Colina.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <p className="section-label">02 / projects</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          AI systems, SaaS products, and client builds — organized by type and
          loaded from MDX case studies.
        </p>
      </div>

      <ProjectsFilter projects={projects} />
    </div>
  );
}
