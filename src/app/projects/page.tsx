import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProjects } from "@/lib/content";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="max-w-2xl text-muted-foreground">
          Case studies and work samples loaded from MDX files in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">content/projects</code>.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                Read case study
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
