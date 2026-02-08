import { CollectionItem } from "~/types/CollectionItem"
import "./HomeImage.css"

function imageUrl(fileName: number) {
  return `/assets/${fileName}.jpg`
}

export const HomeImage = ({ item }: { item: CollectionItem }) => {
  return (
    <article className="image__container">
      {item.fileName != null && (
        <img
          className="image"
          src={imageUrl(item.fileName)}
          alt={item.title}
          loading="lazy"
          decoding="async"
        />
      )}
    </article>
  )
}
