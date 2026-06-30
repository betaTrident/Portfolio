import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d0d0d",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#737373",
              fontFamily: "monospace",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: "#fafafa",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {siteConfig.title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#a3a3a3",
              lineHeight: 1.5,
              maxWidth: 760,
            }}
          >
            {siteConfig.description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontFamily: "monospace",
              fontWeight: 600,
              color: "#5eead4",
            }}
          >
            #64 / 1,920
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#737373",
              fontFamily: "monospace",
            }}
          >
            Reply AI Agent Challenge 2026
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
