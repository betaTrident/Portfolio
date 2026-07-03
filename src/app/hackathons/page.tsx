import type { Metadata } from "next";
import { HackathonsList } from "@/components/hackathons/hackathons-list";
import { hackathons } from "@/data/hackathons";

export const metadata: Metadata = {
  title: "Hackathons",
  description:
    "Kent Colina's AI hackathon track record, including finalist results, highlighted builds, and participant entries.",
};

export default function HackathonsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <p className="section-label">03 / hackathons</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Hackathons
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Competing against thousands of teams to stress-test what I build.
        </p>
      </div>

      <HackathonsList entries={hackathons} includeParticipants />
    </div>
  );
}
