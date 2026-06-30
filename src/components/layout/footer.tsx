import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-6">
        <p className="text-center text-xs text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} {siteConfig.name}
          <span className="mx-2 text-muted-foreground/50" aria-hidden="true">
            ·
          </span>
          Built with Next.js, Tailwind, and MDX
        </p>
      </div>
    </footer>
  );
}
