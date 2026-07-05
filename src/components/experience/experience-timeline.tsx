"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ExperienceEntry } from "@/data/experience";
import { getExperienceYear } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ExperienceTimelineProps = {
  entries: ExperienceEntry[];
  limit?: number;
  headingLevel?: "h2" | "h3";
};

export function ExperienceTimeline({
  entries,
  limit,
  headingLevel = "h3",
}: ExperienceTimelineProps) {
  const reduceMotion = useReducedMotion();
  const visibleEntries = limit ? entries.slice(0, limit) : entries;
  const Heading = headingLevel;

  return (
    <div className="flex flex-col">
      {visibleEntries.map((entry, index) => {
        const year = getExperienceYear(entry.period);
        const isLast = index === visibleEntries.length - 1;

        return (
          <motion.div
            key={`${entry.company}-${entry.role}`}
            className={cn(
              "grid grid-cols-1 gap-3 md:grid-cols-[4rem_1px_1fr] md:gap-x-8 md:gap-y-0",
              !isLast && "pb-10"
            )}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div className="font-mono text-sm text-muted-foreground md:pt-0.5">
              {year}
            </div>

            <div
              className={cn(
                "hidden bg-border md:block",
                isLast ? "self-stretch" : "min-h-full"
              )}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <Heading className="font-display text-lg font-semibold tracking-tight">
                    {entry.role}
                  </Heading>
                  <p className="text-sm text-muted-foreground">
                    {entry.company}
                  </p>
                </div>
                {entry.type === "education" ? (
                  <Badge
                    variant="outline"
                    className="font-mono text-[0.65rem] uppercase tracking-wider"
                  >
                    Education
                  </Badge>
                ) : null}
              </div>

              <p className="font-mono text-xs text-muted-foreground">
                {entry.location} - {entry.period}
              </p>

              {entry.bullets.length > 0 ? (
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span
                        className="mt-2 size-1 shrink-0 rounded-full bg-accent-ai"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
