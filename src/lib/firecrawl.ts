import "server-only";
import Firecrawl from "@mendable/firecrawl-js";

let client: Firecrawl | undefined;

export function getFirecrawl() {
  const apiKey = process.env.FIRECRAWL_API_KEY;

  if (!apiKey) {
    throw new Error("FIRECRAWL_API_KEY is not configured");
  }

  client ??= new Firecrawl({ apiKey });

  return client;
}

export async function scrapePage(url: string) {
  return getFirecrawl().scrape(url, {
    formats: ["markdown"],
    onlyMainContent: true,
  });
}
