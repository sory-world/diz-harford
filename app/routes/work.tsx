import { useLoaderData } from "react-router"
import { PAINTINGS } from "../data/paintings.server"
import type { CollectionItem } from "~/types/CollectionItem"
import { GalleryView } from "~/components/GalleryView/GalleryView"
import { useEffect, useCallback } from "react"
import { Page } from "~/components/Page/Page"
import { PageNav } from "~/components/PageNav/PageNav"
import { useLocation } from "react-router"
import { useState } from "react"

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
  const [urlHash, setUrlHash] = useState("")
  const location = useLocation()
  const scrollToElement = useCallback((el: HTMLElement, smooth: boolean) => {
    el.scrollIntoView({ block: "start", behavior: smooth ? "smooth" : "instant" })
  }, [])

  useEffect(() => {
    if (!location.hash) return
    const id = decodeURIComponent(location.hash.slice(1))
    const el = document.getElementById(id)
    if (!el) return
    setUrlHash(id)

    // Initial smooth scroll
    scrollToElement(el, true)

    // Cancel if scroll during smooth scroll animation
    const cancelSmoothScroll = () => {
      window.scrollTo({ top: window.scrollY })
    }
    window.addEventListener("wheel", cancelSmoothScroll, { passive: true, once: true })
    window.addEventListener("touchmove", cancelSmoothScroll, { passive: true, once: true })

    // After scroll settles check to correct for layout shift (lazy images loading and pushing content down)
    const timeout = setTimeout(() => {
      const rect = el.getBoundingClientRect()
      if (Math.abs(rect.top) > 50) {
        scrollToElement(el, false)
      }
    }, 800)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("wheel", cancelSmoothScroll)
      window.removeEventListener("touchmove", cancelSmoothScroll)
    }
  }, [location.hash, items, scrollToElement])

  return (
    <Page
      pageNav={
        <PageNav>
          {DATE_INCREMENTS.map((dateRange) => {
            const id = toId(dateRange.label)
            return (
              <a
                key={id}
                href={`#${id}`}
                style={urlHash === id ? { textDecoration: "underline", fontWeight: 500 } : {}}
              >
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
