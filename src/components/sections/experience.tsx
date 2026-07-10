import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20">
      <div className="mb-8 flex flex-col gap-3">
        <div className="flex items-end justify-between gap-4">
          <h2 className="section-label">04 / experience</h2>
          <Link
            href="/experience"
            className="group inline-flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent-ai"
          >
            full history
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          Shipping production software at Symph while competing in global AI hackathons on the sidelines.
        </p>
      </div>

      <ExperienceTimeline entries={experience} limit={2} />
    </section>
  );
}
