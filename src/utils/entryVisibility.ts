export const includeDraftEntries = import.meta.env.DEV;
const excludedSlugs = new Set(["template-entry"]);

export function filterVisibleEntries<T extends { slug: string; data: { draft: boolean } }>(entries: T[]): T[] {
  return entries.filter((entry) => {
    if (excludedSlugs.has(entry.slug)) {
      return false;
    }

    return includeDraftEntries || !entry.data.draft;
  });
}
