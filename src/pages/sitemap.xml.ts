import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const site = "https://openordinal.org";

const staticPaths = [
  "/",
  "/archive",
  "/data",
  "/method",
  "/about",
  "/legal",
  "/legal/privacy",
  "/legal/terms",
  "/legal/licenses",
  "/fr",
  "/fr/archive",
  "/fr/data",
  "/fr/method",
  "/fr/about",
  "/fr/legal",
  "/fr/legal/privacy",
  "/fr/legal/terms",
  "/fr/legal/licenses"
];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const buildUrl = (pathname: string) => new URL(pathname, site).toString();

type SitemapUrl = {
  loc: string;
  lastmod?: string;
};

export const GET: APIRoute = async () => {
  const entries = (await getCollection("entries"))
    .filter((entry) => !entry.data.draft)
    .map((entry) => ({
      loc: buildUrl(`/entries/${entry.slug}`),
      lastmod: entry.data.date.toISOString().slice(0, 10)
    }));

  const entriesFr = (await getCollection("entries-fr"))
    .filter((entry) => !entry.data.draft)
    .map((entry) => ({
      loc: buildUrl(`/fr/entries/${entry.slug}`),
      lastmod: entry.data.date.toISOString().slice(0, 10)
    }));

  const urls: SitemapUrl[] = [
    ...staticPaths.map((pathname) => ({ loc: buildUrl(pathname) })),
    ...entries,
    ...entriesFr
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>${url.lastmod ? `
    <lastmod>${url.lastmod}</lastmod>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
