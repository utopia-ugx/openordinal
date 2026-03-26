export const includeDraftEntries = import.meta.env.DEV;

export function filterVisibleEntries<T extends { data: { draft: boolean } }>(entries: T[]): T[] {
  return includeDraftEntries ? entries : entries.filter((entry) => !entry.data.draft);
}
