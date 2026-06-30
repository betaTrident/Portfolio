"use client";

import { motion, useReducedMotion } from "motion/react";
import { ProjectCard } from "@/components/projects/project-card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { Project } from "@/types/content";

type ProjectsGridProps = {
  projects: Project[];
  animateOnView?: boolean;
};

export function ProjectsGrid({
  projects,
  animateOnView = true,
}: ProjectsGridProps) {
  const reduceMotion = useReducedMotion();

  if (!animateOnView || reduceMotion) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      {projects.map((project) => (
        <motion.div key={project.slug} variants={fadeUp}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
