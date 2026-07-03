import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

export const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "optional",
});

export const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "optional",
});

export const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "optional",
});
