import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildFeedXml } from "../../utils/rss";
import { filterVisibleEntries } from "../../utils/entryVisibility";

export const GET: APIRoute = async () => {
  const entries = filterVisibleEntries(await getCollection("entries-fr"));

  const body = buildFeedXml({
    description: "Analyses structurees des donnees africaines sur Open Ordinal.",
    entries,
    feedPathname: "/fr/rss.xml",
    lang: "fr",
    sitePathname: "/fr",
    title: "Open Ordinal FR"
  });

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
};
