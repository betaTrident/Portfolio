import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/content/mdx-content";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProject, getProjects } from "@/lib/content";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to projects
      </Link>

      <header className="mt-8 flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-3">
          <Badge
            variant="outline"
            className="font-mono text-[0.65rem] uppercase tracking-wider"
          >
            {project.category}
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">
            {formattedDate}
          </span>
        </div>

        <h1 className="font-display text-4xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="text-lg text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="font-mono text-[0.65rem] font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
            >
              GitHub
              <ArrowUpRight data-icon="inline-end" />
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
            >
              Demo
              <ArrowUpRight data-icon="inline-end" />
            </a>
          ) : null}
        </div>
      </header>

      <Separator className="my-10" />

      <MdxContent source={project.content} />
    </div>
  );
}
