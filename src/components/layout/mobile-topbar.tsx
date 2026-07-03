"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CommandMenuTrigger } from "@/components/command-menu-trigger";
import { pageNavItems, sectionNavItems } from "@/components/layout/nav-items";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";

function sectionHref(id: string, isHome: boolean) {
  return isHome ? `#${id}` : `/#${id}`;
}

export function MobileTopbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  const closeSheet = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/85 backdrop-blur-sm lg:hidden">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight transition-colors hover:text-accent-ai focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-2">
          <CommandMenuTrigger variant="mobile" />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle className="font-display">
                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-6 px-4 pb-6"
                aria-label="Mobile navigation"
              >
                <div className="flex flex-col gap-1">
                  {sectionNavItems.map((item) => (
                    <Link
                      key={item.id}
                      href={sectionHref(item.id, isHome)}
                      onClick={closeSheet}
                      className="py-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {item.number} / {item.label}
                    </Link>
                  ))}
                </div>

                <div className="h-px bg-border" aria-hidden="true" />

                <div className="flex flex-col gap-1">
                  {pageNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeSheet}
                      className="py-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
