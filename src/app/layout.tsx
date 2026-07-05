import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { CommandMenuProvider } from "@/components/command-menu-provider";
import { DeferredVitals } from "@/components/layout/deferred-vitals";
import { Footer } from "@/components/layout/footer";
import { MobileTopbar } from "@/components/layout/mobile-topbar";
import { Sidebar } from "@/components/layout/sidebar";
import { getProjects } from "@/lib/content";
import { fontDisplay, fontMono, fontSans } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "Agentic Systems",
    "Next.js",
    "TypeScript",
    "Cebu",
  ],
  authors: [{ name: "Kent Bryan Colina", url: siteConfig.url }],
  creator: "Kent Bryan Colina",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    creator: "@kentcolina",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const enableVitals = process.env.VERCEL === "1" || Boolean(process.env.VERCEL_ENV);
  const projects = getProjects().map((project) => ({
    title: project.title,
    slug: project.slug,
    category: project.category,
  }));

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:inline-flex focus:min-h-6 focus:items-center focus:rounded-md focus:border focus:border-border focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CommandMenuProvider projects={projects}>
            <div className="flex min-h-screen flex-col">
              <Sidebar />
              <MobileTopbar />
              <main id="main" className="flex-1 lg:pl-56">
                {children}
              </main>
              <Footer className="lg:pl-56" />
            </div>
          </CommandMenuProvider>
        </ThemeProvider>
        <DeferredVitals enabled={enableVitals} />
      </body>
    </html>
  );
}
