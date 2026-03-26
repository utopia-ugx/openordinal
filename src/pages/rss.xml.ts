import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildFeedXml } from "../utils/rss";
import { filterVisibleEntries } from "../utils/entryVisibility";

export const GET: APIRoute = async () => {
  const entries = filterVisibleEntries(await getCollection("entries"));

  const body = buildFeedXml({
    description: "Structured analysis of African data from Open Ordinal.",
    entries,
    feedPathname: "/rss.xml",
    lang: "en",
    sitePathname: "/",
    title: "Open Ordinal"
  });

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
};
