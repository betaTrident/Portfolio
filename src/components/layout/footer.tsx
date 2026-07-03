import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t border-border/50", className)}>
      <div className="mx-auto max-w-5xl px-6 py-6">
        <p className="text-center font-mono text-xs text-muted-foreground sm:text-left">
          (c) {new Date().getFullYear()} {siteConfig.name}
          <span className="mx-2 text-muted-foreground/50" aria-hidden="true">
            /
          </span>
          built with Next.js
        </p>
      </div>
    </footer>
  );
}
