"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Hackathon } from "@/data/hackathons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/lib/motion";

type HackathonsListProps = {
  entries: Hackathon[];
  includeParticipants?: boolean;
};

function VerifyLink({ href }: { href?: string }) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-accent-ai focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      Verify
      <ArrowUpRight className="size-3" />
    </a>
  );
}

function HighlightCard({
  entry,
  index,
}: {
  entry: Hackathon;
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

          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              {entry.name}
            </h3>
            <VerifyLink href={entry.href} />
          </div>

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

function ParticipantRow({ entry }: { entry: Hackathon }) {
  return (
    <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-medium">{entry.name}</p>
          <VerifyLink href={entry.href} />
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {entry.description}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-4 font-mono text-xs text-muted-foreground">
        <span>{entry.result}</span>
        <span>{entry.year}</span>
      </div>
    </div>
  );
}

export function HackathonsList({
  entries,
  includeParticipants = false,
}: HackathonsListProps) {
  const reduceMotion = useReducedMotion();
  const highlighted = entries.filter((entry) => entry.highlight);
  const participants = entries.filter((entry) => !entry.highlight);

  return (
    <>
      <div className="flex flex-col gap-6">
        {highlighted.map((entry, index) => (
          <HighlightCard key={entry.name} entry={entry} index={index} />
        ))}
      </div>

      {includeParticipants && participants.length > 0 ? (
        <motion.div
          className="mt-10 flex flex-col divide-y divide-border border-t border-border"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          {participants.map((entry) => (
            <ParticipantRow key={entry.name} entry={entry} />
          ))}
        </motion.div>
      ) : null}
    </>
  );
}
