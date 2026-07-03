"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import type { Project } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const year = new Date(project.date).getFullYear();
  const projectHref = `/projects/${project.slug}`;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn("h-full", className)}
    >
      <Link
        href={projectHref}
        aria-label={`View details for ${project.title}`}
        className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Card className="flex h-full flex-col transition-shadow group-hover:shadow-md">
          <CardHeader className="gap-3">
            <div className="flex items-center justify-between gap-2">
              <Badge
                variant="outline"
                className="font-mono text-[0.65rem] uppercase tracking-wider"
              >
                {project.category}
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                {year}
              </span>
            </div>
            <CardTitle className="font-display text-xl font-semibold transition-colors group-hover:text-accent-ai">
              {project.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </CardHeader>
          <CardContent className="mt-auto flex flex-col gap-4">
            <div className="flex flex-wrap gap-1.5">
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
            <span
              aria-hidden="true"
              className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-accent-ai"
            >
              view details
              <ArrowUpRight className="size-3 shrink-0" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
