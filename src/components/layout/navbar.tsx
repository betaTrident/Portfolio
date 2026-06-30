"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", hash: "#about" },
  { label: "Projects", hash: "#projects", page: "/projects" },
  { label: "Hackathons", hash: "#hackathons" },
  { label: "Experience", hash: "#experience" },
  { label: "Skills", hash: "#skills" },
] as const;

function NavLink({
  label,
  hash,
  page,
  isHome,
  onNavigate,
  className,
}: {
  label: string;
  hash: string;
  page?: string;
  isHome: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  const href = isHome ? hash : (page ?? `/${hash}`);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn("nav-link", className)}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  const closeSheet = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight transition-colors hover:text-accent-ai focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink key={item.label} {...item} isHome={isHome} />
          ))}
          <span className="text-muted-foreground/40" aria-hidden="true">
            ·
          </span>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
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
                <SheetTitle className="font-display">{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-4 px-4"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    {...item}
                    isHome={isHome}
                    onNavigate={closeSheet}
                    className="py-1 text-base"
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
