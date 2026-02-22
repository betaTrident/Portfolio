import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: "Code-K - Full Stack Developer Portfolio",
  description: "Full-stack developer specialized in React, Next.js, and modern web technologies. Building scalable solutions with clean code and best practices.",
  keywords: ["full-stack developer", "React", "Next.js", "web development", "TypeScript", "Node.js"],
  authors: [{ name: "Kent Bryan Colina" }],
  creator: "Kent Bryan Colina",
  metadataBase: new URL("https://kentcolina.com"), // Replace with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kentcolina.com",
    siteName: "Kent Bryan Colina Portfolio",
    title: "Kent Bryan Colina - Full Stack Developer",
    description: "Building scalable solutions with modern technologies. Specializing in React, Next.js, and full-stack development.",
    images: [
      {
        url: "https://kentcolina.com/og-image.png", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Kent Bryan Colina Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kent Bryan Colina - Full Stack Developer",
    description: "Building scalable solutions with modern technologies.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
    images: ["https://kentcolina.com/og-image.png"], // Replace with your image
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
