"use client";

import { Search } from "lucide-react";
import { useCommandMenu } from "@/components/command-menu-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CommandMenuTriggerProps = {
  variant?: "sidebar" | "mobile";
};

export function CommandMenuTrigger({
  variant = "sidebar",
}: CommandMenuTriggerProps) {
  const { openCommandMenu } = useCommandMenu();

  if (variant === "mobile") {
    return (
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={openCommandMenu}
        aria-label="Open command palette"
      >
        <Search className="size-4" />
      </Button>
    );
  }

  return (
    <button
      type="button"
      onClick={openCommandMenu}
      className={cn(
        "flex items-center justify-between rounded-md border border-border px-3 py-2 text-left font-mono text-[11px] text-muted-foreground transition-colors hover:border-accent-ai/60 hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
    >
      <span>command palette</span>
      <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] text-foreground">
        Ctrl K
      </kbd>
    </button>
  );
}
