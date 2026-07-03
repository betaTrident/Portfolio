import Link from "next/link";
import { CommandMenuTrigger } from "@/components/command-menu-trigger";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { siteConfig } from "@/lib/site";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-56 flex-col border-r border-border bg-background px-7 py-8 lg:flex">
      <div className="mb-10 flex flex-col gap-1">
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight transition-colors hover:text-accent-ai focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {siteConfig.name}
        </Link>
        <p className="font-mono text-xs text-muted-foreground">
          Full-Stack / AI Engineer
        </p>
      </div>

      <SidebarNav />

      <div className="mt-8 flex flex-col gap-4">
        <p className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full rounded-full bg-accent-ai opacity-70 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-accent-ai" />
          </span>
          open to opportunities
        </p>

        <CommandMenuTrigger />

        <div className="flex items-center justify-between gap-3">
          <ThemeToggle />
          <div className="flex gap-3 font-mono text-[11px] text-muted-foreground">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              github
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              linkedin
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              email
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
