"use client";

import { motion, useReducedMotion } from "motion/react";
import { hackathons } from "@/data/hackathons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/lib/motion";

const highlighted = hackathons.filter((entry) => entry.highlight);
const participants = hackathons.filter((entry) => !entry.highlight);

function HighlightCard({
  entry,
  index,
}: {
  entry: (typeof hackathons)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay: reduceMotion ? 0 : index * 0.08 }}
    >
      <Card className="border-accent-ai/20 bg-card/50">
        <CardContent className="flex flex-col gap-4 pt-6">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
              Built under pressure
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {entry.year}
            </span>
          </div>

          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            {entry.name}
          </h3>

          <p className="font-mono text-2xl font-medium text-accent-ai sm:text-3xl">
            {entry.result}
            {entry.resultLabel ? (
              <span className="ml-2 text-base text-muted-foreground sm:text-lg">
                {entry.resultLabel}
              </span>
            ) : null}
          </p>

          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {entry.description}
          </p>

          {entry.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="font-mono text-[0.65rem] font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Hackathons() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hackathons" className="scroll-mt-20 py-24">
      <h2 className="section-label mb-10">03 / hackathons</h2>

      <div className="flex flex-col gap-6">
        {highlighted.map((entry, index) => (
          <HighlightCard key={entry.name} entry={entry} index={index} />
        ))}
      </div>

      {participants.length > 0 ? (
        <motion.div
          className="mt-10 flex flex-col divide-y divide-border border-t border-border"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          {participants.map((entry) => (
            <div
              key={entry.name}
              className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{entry.name}</p>
                <p className="mt-1 text-sm text-muted-foreground sm:hidden">
                  {entry.description}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-4 font-mono text-xs text-muted-foreground">
                <span>{entry.result}</span>
                <span>{entry.year}</span>
              </div>
            </div>
          ))}
        </motion.div>
      ) : null}
    </section>
  );
}
