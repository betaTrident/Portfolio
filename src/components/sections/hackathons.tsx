import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HackathonsList } from "@/components/hackathons/hackathons-list";
import { hackathons } from "@/data/hackathons";

export function Hackathons() {
  return (
    <section id="hackathons" className="scroll-mt-20 py-24">
      <div className="mb-10 flex flex-col gap-3">
        <div className="flex items-end justify-between gap-4">
          <h2 className="section-label">03 / hackathons</h2>
          <Link
            href="/hackathons"
            className="group inline-flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent-ai"
          >
            full track record
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Competing against thousands of teams to stress-test what I build.
        </p>
      </div>

      <HackathonsList entries={hackathons} />
    </section>
  );
}
