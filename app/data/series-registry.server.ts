import { CollectionItem } from "~/types/CollectionItem"

type SeriesModule = { default: CollectionItem[] }

const modules = import.meta.glob<SeriesModule>("./series/*.server.ts")

function fileToSlug(path: string) {
  return path.split("/").pop()!.replace(".server.ts", "")
}

const slugToImporter = new Map(
  Object.entries(modules).map(([path, importer]) => [fileToSlug(path), importer]),
)

export async function getSeriesItemsBySlug(slug: string): Promise<CollectionItem[] | null> {
  const importer = slugToImporter.get(slug)
  if (!importer) return null
  const mod = await importer()
  return mod.default
}

export function listSeriesSlugs(): string[] {
  return [...slugToImporter.keys()]
}
