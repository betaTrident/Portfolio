import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  alternates: {
    canonical: `${siteConfig.url}/404`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24">
      <p className="section-label">404</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="text-muted-foreground">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="font-mono text-sm text-accent-ai transition-colors hover:text-accent-ai/80"
      >
        ← back to home
      </Link>
    </div>
  );
}
