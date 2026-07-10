import { NextResponse } from "next/server";

import { scrapePage } from "@/lib/firecrawl";

export const runtime = "nodejs";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse(null, { status: 404 });
  }

  try {
    const result = await scrapePage("https://example.com");

    return NextResponse.json({
      markdown: result.markdown,
      metadata: result.metadata,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Firecrawl request failed";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
