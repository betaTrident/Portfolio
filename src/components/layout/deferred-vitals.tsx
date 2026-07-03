"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false }
);

const SpeedInsights = dynamic(
  () =>
    import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
  { ssr: false }
);

export function DeferredVitals({ enabled }: { enabled: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer until browser is idle to avoid any TBT contribution during
    // the Lighthouse measurement window (FCP → TTI).
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setMounted(true), { timeout: 4000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => setMounted(true), 4000);
      return () => clearTimeout(id);
    }
  }, []);

  if (!enabled || !mounted) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
