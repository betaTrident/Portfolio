import { Mail } from "lucide-react";
import Link from "next/link";
import { CommandMenuTrigger } from "@/components/command-menu-trigger";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
] as const;

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
          <TooltipProvider>
            <div className="flex items-center gap-1">
              {socialLinks.map(({ label, href, icon: Icon, external }) => (
                <Tooltip key={label}>
                  <TooltipTrigger
                    render={
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        aria-label={label}
                        className="inline-flex size-8 items-center justify-center rounded-md border border-transparent text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-accent-ai focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      />
                    }
                  >
                    <Icon className="size-4" />
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </aside>
  );
}
