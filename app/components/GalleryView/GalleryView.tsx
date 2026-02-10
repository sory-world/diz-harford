import { CollectionItem } from "~/types/CollectionItem"
import { GalleryImage } from "~/components/GalleryImage/GalleryImage"
import "./GalleryView.css"
import { useState, useEffect } from "react"

export const GalleryView = ({
  title,
  items,
}: {
  title?: string
  items: CollectionItem[]
  sortType?: string
  showSeries?: boolean
}) => {
  return (
    <div className="gallery-view">
      {title && <h3>{title}</h3>}
      <div className="gallery-view__content">
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 16 }}>
          {items.map((item) => {
            // Do not render entries without images
            if (item.fileName === null) {
              return
            }
            return (
              <li key={item.catalogNo}>
                <GalleryImage item={item} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
