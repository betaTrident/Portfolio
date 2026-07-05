import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { experience } from "@/data/experience";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Production software experience, freelance client builds, and education history from Kent Colina.",
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <p className="section-label">04 / experience</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Experience
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Shipping production software at Symph while competing in global AI
          hackathons on the side.
        </p>
      </div>

      <ExperienceTimeline entries={experience} headingLevel="h2" />
    </div>
  );
}
