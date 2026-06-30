"use client";

import { motion, useReducedMotion } from "motion/react";
import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <h2 className="section-label mb-10">05 / skills</h2>

      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {skills.map((category) => (
          <motion.div key={category.name} variants={fadeUp}>
            <Card className="h-full">
              <CardContent className="flex flex-col gap-4 pt-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {category.name}
                  </h3>
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
    </section>
  );
}
