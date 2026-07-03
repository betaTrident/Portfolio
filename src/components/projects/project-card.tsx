"use client";

import { ArrowRight } from "lucide-react";
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

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn("h-full", className)}
    >
      <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
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
          <CardTitle className="font-display text-xl font-semibold">
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
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className="group inline-flex w-fit items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent-ai"
          >
            case study
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
