import { CollectionItem } from "~/types/CollectionItem"
import "./GalleryImage.css"
import { useLocation } from "react-router"
import { Link } from "react-router"

function imageUrl(fileName: number) {
  return `/assets/${fileName}.jpg`
}

const seriesTitleToSlug = (title: string) => {
  return title
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-")
}

export const GalleryImage = ({ item }: { item: CollectionItem }) => {
  const { pathname } = useLocation()
  const isSeries = pathname.includes("series")

  console.log(seriesTitleToSlug(item.title))

  return (
    <article className="page-image__container">
      <div className="page-image__image-wrap">
        {item.fileName !== null && (
          <img
            className="page-image__image"
            src={imageUrl(item.fileName)}
            alt={item.title}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <div className="page-image__description">
        <i>{item.title}</i>
        <p>{item.date}</p>
        <p>{item.medium}</p>
        <p>{item.dimensions}</p>
        {!isSeries && (
          <Link
            style={{ textDecoration: "underline" }}
            to={`/series/${seriesTitleToSlug(item.series)}`}
          >{`${item.series}`}</Link>
        )}
      </div>
    </article>
  )
}
