import { CollectionItem } from "~/types/CollectionItem"
import { useLocation } from "react-router"
import { Link } from "react-router"

function imageUrl(fileName: number) {
  return `/assets/${fileName}.webp`
}

const seriesTitleToSlug = (title: string) => {
  return title
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-")
}

export const GalleryImage = ({ item, index }: { item: CollectionItem; index: number }) => {
  const { pathname } = useLocation()
  const isSeries = pathname.includes("series")
  const isFirstImage = index === 0
  return (
    <article className="page-image__container">
      <div className="page-image__image-wrap">
        {item.fileName !== null && (
          <img
            className="page-image__image"
            src={imageUrl(item.fileName)}
            alt={item.title}
            loading={isFirstImage ? undefined : "lazy"}
            fetchPriority={isFirstImage ? "high" : "low"}
            decoding="async"
          />
        )}
      </div>
      <div className="page-image__description">
        <b>{item.title}</b>
        {/* TODO: portraits temporarily disabled */}
        {!isSeries && item.series !== "Portraits" && (
          <Link
            style={{ textDecoration: "underline" }}
            to={`/series/${seriesTitleToSlug(item.series)}`}
          >
            <i>{`${item.series}`}</i>
          </Link>
        )}
        <p>{item.date !== "nd" && item.date}</p>
        <p>{item.medium}</p>
        <p>{item.dimensions}</p>
      </div>
    </article>
  )
}
