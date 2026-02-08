import { useLoaderData } from "react-router"
import { PAINTINGS } from "../data/paintings.server"
import type { CollectionItem } from "~/types/CollectionItem"
import { GalleryView } from "~/pages/GalleryView"
import { useEffect } from "react"
import { Page } from "~/components/Page/Page"
import { PageNav } from "~/components/PageNav/PageNav"
import { useLocation } from "react-router"

type LoaderData = {
  items: CollectionItem[][]
}

const DATE_INCREMENTS = [
  { label: "2009-2000", upper: 2009, lower: 2000 },
  { label: "2000-1990", upper: 2000, lower: 1990 },
  { label: "1990-1980", upper: 1990, lower: 1980 },
  { label: "1980-1970", upper: 1980, lower: 1970 },
  { label: "1970-1960", upper: 1970, lower: 1960 },
]

const normalizeDate = (item: CollectionItem) =>
  typeof item.date === "string" ? Number(item.date.replace("c", "")) : item.date

const getImagesWithinRange = (items: CollectionItem[], upper: number, lower: number) => {
  return items
    .filter((item) => normalizeDate(item) < upper && normalizeDate(item) > lower)
    .map((item) => item)
}

export async function loader(): Promise<LoaderData> {
  const sortedItems = PAINTINGS.sort((a, b) => normalizeDate(b) - normalizeDate(a))

  const anchor1 = getImagesWithinRange(
    sortedItems,
    DATE_INCREMENTS[0].upper,
    DATE_INCREMENTS[0].lower,
  )
  const anchor2 = getImagesWithinRange(
    sortedItems,
    DATE_INCREMENTS[1].upper,
    DATE_INCREMENTS[1].lower,
  )
  const anchor3 = getImagesWithinRange(
    sortedItems,
    DATE_INCREMENTS[2].upper,
    DATE_INCREMENTS[2].lower,
  )
  const anchor4 = getImagesWithinRange(
    sortedItems,
    DATE_INCREMENTS[3].upper,
    DATE_INCREMENTS[3].lower,
  )
  const anchor5 = getImagesWithinRange(
    sortedItems,
    DATE_INCREMENTS[4].upper,
    DATE_INCREMENTS[4].lower,
  )

  return {
    items: [anchor1, anchor2, anchor3, anchor4, anchor5],
  }
}

const toId = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "")

export default function Work() {
  const { items } = useLoaderData() as LoaderData
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = decodeURIComponent(location.hash.slice(1))
    const el = document.getElementById(id)
    if (!el) return

    requestAnimationFrame(() => {
      el.scrollIntoView({ block: "start", behavior: "smooth" })
    })
  }, [location.hash, items])

  return (
    <Page
      pageNav={
        <PageNav>
          {DATE_INCREMENTS.map((dateRange) => {
            const id = toId(dateRange.label)
            return (
              <a key={id} href={`#${id}`}>
                {dateRange.label}
              </a>
            )
          })}
        </PageNav>
      }
    >
      {DATE_INCREMENTS.map((dateRange, i) => {
        const id = toId(dateRange.label)
        return (
          <section key={id} id={id} className="anchor">
            <GalleryView title={dateRange.label} items={items[i]} />
          </section>
        )
      })}
    </Page>
  )
}
