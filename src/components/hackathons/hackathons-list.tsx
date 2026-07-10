"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Hackathon } from "@/data/hackathons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type HackathonsListProps = {
  entries: Hackathon[];
  includeParticipants?: boolean;
  headingLevel?: "h2" | "h3";
};

type DeckPosition = "center" | "left" | "right";

function getDeckPosition(
  index: number,
  activeIndex: number,
  total: number
): DeckPosition {
  if (index === activeIndex) return "center";
  if (index === (activeIndex + 1) % total) return "left";
  return "right";
}

const deckMotion: Record<
  DeckPosition,
  {
    top: number;
    x: string;
    rotate: number;
    scale: number;
    opacity: number;
    zIndex: number;
  }
> = {
  center: {
    top: 8,
    x: "-50%",
    rotate: 0,
    scale: 1,
    opacity: 1,
    zIndex: 20,
  },
  left: {
    top: 48,
    x: "-118%",
    rotate: -5,
    scale: 0.96,
    opacity: 0.8,
    zIndex: 10,
  },
  right: {
    top: 48,
    x: "18%",
    rotate: 5,
    scale: 0.96,
    opacity: 0.8,
    zIndex: 10,
  },
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
      onClick={(event) => event.stopPropagation()}
      className="inline-flex items-center gap-1 font-mono text-[0.65rem] text-muted-foreground transition-colors hover:text-accent-ai focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      Verify
      <ArrowUpRight className="size-3" />
    </a>
  );
}

function HackathonCardContent({
  entry,
  index,
  headingLevel,
  isFeatured,
}: {
  entry: Hackathon;
  index: number;
  headingLevel: "h2" | "h3";
  isFeatured: boolean;
}) {
  const Heading = headingLevel;

  return (
    <>
      <div className="flex flex-wrap items-center gap-1.5">
        <Badge className="rounded-full bg-foreground px-2.5 py-0.5 font-mono text-[0.6rem] uppercase text-background">
          {entry.result}
          {entry.resultLabel ? ` ${entry.resultLabel}` : ""}
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full px-2.5 py-0.5 font-mono text-[0.6rem] uppercase text-muted-foreground"
        >
          {entry.year}
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full px-2.5 py-0.5 font-mono text-[0.6rem] uppercase text-muted-foreground"
        >
          AI hackathon
        </Badge>
      </div>

      <div className="mt-3 flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted/35 font-mono text-xs text-accent-ai">
          0{index + 1}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
            <Heading
              className={cn(
                "font-display font-semibold leading-tight",
                isFeatured ? "text-base" : "text-sm"
              )}
            >
              {entry.name}
            </Heading>
            <VerifyLink href={entry.href} />
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            {entry.description}
          </p>
        </div>
      </div>

      {entry.tags.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-1">
          {entry.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full font-mono text-[0.6rem] font-normal text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}
    </>
  );
}

function DeckCard({
  entry,
  index,
  activeIndex,
  total,
  headingLevel,
  onSelect,
}: {
  entry: Hackathon;
  index: number;
  activeIndex: number;
  total: number;
  headingLevel: "h2" | "h3";
  onSelect: (index: number) => void;
}) {
  const reduceMotion = useReducedMotion();
  const position = getDeckPosition(index, activeIndex, total);
  const isFeatured = position === "center";
  const motionState = deckMotion[position];

  return (
    <motion.button
      type="button"
      aria-label={`Show ${entry.name}`}
      aria-pressed={isFeatured}
      onClick={() => onSelect(index)}
      initial={false}
      animate={motionState}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "tween", duration: 0.55, ease: [0.4, 0, 0.2, 1] }
      }
      className={cn(
        "absolute left-1/2 w-[min(26rem,50%)] text-left will-change-transform",
        isFeatured ? "cursor-default" : "cursor-pointer"
      )}
    >
      <Card
        className={cn(
          "h-full overflow-hidden rounded-lg border bg-card/90 py-0 shadow-lg shadow-background/20 backdrop-blur transition-[border-color,box-shadow] duration-500 ease-out",
          isFeatured
            ? "border-accent-ai/30 shadow-xl"
            : "border-border/70 bg-card/80 hover:border-accent-ai/25"
        )}
      >
        <CardContent className="flex h-full flex-col p-4">
          <HackathonCardContent
            entry={entry}
            index={index}
            headingLevel={headingLevel}
            isFeatured={isFeatured}
          />
        </CardContent>
      </Card>
    </motion.button>
  );
}

function MobileDeckCard({
  entry,
  index,
  headingLevel,
}: {
  entry: Hackathon;
  index: number;
  headingLevel: "h2" | "h3";
}) {
  return (
    <Card className="h-full overflow-hidden rounded-lg border border-accent-ai/30 bg-card/90 py-0 shadow-lg">
      <CardContent className="flex h-full flex-col p-4">
        <HackathonCardContent
          entry={entry}
          index={index}
          headingLevel={headingLevel}
          isFeatured
        />
      </CardContent>
    </Card>
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
  headingLevel = "h3",
}: HackathonsListProps) {
  const reduceMotion = useReducedMotion();
  const highlighted = entries.filter((entry) => entry.highlight);
  const participants = entries.filter((entry) => !entry.highlight);
  const [activeIndex, setActiveIndex] = useState(0);

  if (highlighted.length === 0) {
    return null;
  }

  const safeActiveIndex = activeIndex % highlighted.length;

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2 lg:hidden">
          {highlighted.map((entry, index) => (
            <button
              key={entry.name}
              type="button"
              aria-label={`Show ${entry.name}`}
              aria-pressed={safeActiveIndex === index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-full border px-3 py-1 font-mono text-[0.65rem] transition-colors",
                safeActiveIndex === index
                  ? "border-accent-ai/50 bg-accent-ai/10 text-accent-ai"
                  : "border-border text-muted-foreground hover:border-accent-ai/30 hover:text-foreground"
              )}
            >
              0{index + 1} · {entry.result}
            </button>
          ))}
        </div>

        <div className="relative lg:min-h-[17rem] lg:pb-2">
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={highlighted[safeActiveIndex].name}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
                }
              >
                <MobileDeckCard
                  entry={highlighted[safeActiveIndex]}
                  index={safeActiveIndex}
                  headingLevel={headingLevel}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:block">
            {highlighted.map((entry, index) => (
              <DeckCard
                key={entry.name}
                entry={entry}
                index={index}
                activeIndex={safeActiveIndex}
                total={highlighted.length}
                headingLevel={headingLevel}
                onSelect={setActiveIndex}
              />
            ))}
          </div>
        </div>
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
