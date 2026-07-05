"use client";

import { motion, useReducedMotion } from "motion/react";
import type { SkillCategory } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, staggerContainer } from "@/lib/motion";

type SkillsGridProps = {
  categories: SkillCategory[];
  headingLevel?: "h2" | "h3";
};

export function SkillsGrid({
  categories,
  headingLevel = "h3",
}: SkillsGridProps) {
  const reduceMotion = useReducedMotion();
  const Heading = headingLevel;

  return (
    <motion.div
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      {categories.map((category) => (
        <motion.div key={category.name} variants={fadeUp}>
          <Card className="h-full">
            <CardContent className="flex flex-col gap-4 pt-6">
              <div className="flex flex-col gap-2">
                <Heading className="font-display text-base font-semibold tracking-tight">
                  {category.name}
                </Heading>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="font-mono text-[0.65rem] font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
