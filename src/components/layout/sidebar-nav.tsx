"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pageNavItems, sectionNavItems } from "@/components/layout/nav-items";
import { cn } from "@/lib/utils";

function sectionHref(id: string, isHome: boolean) {
  return isHome ? `#${id}` : `/#${id}`;
}

export function SidebarNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>(
    sectionNavItems[0].id
  );

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const sections = sectionNavItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        }

        if (visibleSections.size === 0) {
          return;
        }

        const [mostVisibleId] = [...visibleSections.entries()].sort(
          (a, b) => b[1] - a[1]
        )[0];

        setActiveSection(mostVisibleId);
      },
      {
        rootMargin: "-24% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [isHome]);

  return (
    <nav aria-label="Main navigation" className="flex flex-1 flex-col gap-8">
      <div className="flex flex-col gap-1">
        {sectionNavItems.map((item) => {
          const active = isHome && activeSection === item.id;

          return (
            <Link
              key={item.id}
              href={sectionHref(item.id, isHome)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "group relative flex min-h-6 items-center gap-3 py-1 font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                active && "text-accent-ai"
              )}
            >
              <span
                className={cn(
                  "h-px w-4 bg-muted-foreground/35 transition-all duration-200 group-hover:w-6 group-hover:bg-foreground",
                  active && "w-7 bg-accent-ai"
                )}
                aria-hidden="true"
              />
              <span className="text-muted-foreground">{item.number}</span>
              <span>/ {item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="h-px bg-border" aria-hidden="true" />

      <div className="flex flex-col gap-1">
        {pageNavItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-6 items-center py-1 font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                active && "text-accent-ai"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
