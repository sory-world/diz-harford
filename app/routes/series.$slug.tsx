import type { LoaderFunctionArgs } from "react-router"
import { useLoaderData } from "react-router"
import { getSeriesItemsBySlug } from "~/data/series-registry.server"
import type { CollectionItem } from "~/types/CollectionItem"
import { data } from "react-router"
import { RESERVED_ROUTES } from "~/constants/reservedRoutes"
import { GalleryView } from "~/pages/GalleryView"

const titleFromSlug = (slug: string) => {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(" ")
}

type LoaderData = {
  slug: string
  title: string
  items: CollectionItem[]
}

export async function loader({ params }: LoaderFunctionArgs): Promise<LoaderData> {
  const slug = (params.slug ?? "").toLowerCase()
  if (!slug || RESERVED_ROUTES.has(slug)) throw data("Not Found", { status: 404 })

  const items = await getSeriesItemsBySlug(slug)
  if (!items) throw data("Not Found", { status: 404 })

  return {
    slug,
    title: titleFromSlug(slug),
    items,
  }
}

export default function SeriesSlug() {
  const { title, items } = useLoaderData() as LoaderData

  return (
    <div key={title}>
      <GalleryView title={title} items={items} />
    </div>
  )
}
