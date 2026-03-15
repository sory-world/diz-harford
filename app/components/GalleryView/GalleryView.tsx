import { CollectionItem } from "~/types/CollectionItem"
import { GalleryImage } from "~/components/GalleryImage/GalleryImage"
import { motion } from "motion/react"

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
    <motion.div
      className="gallery-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
    >
      {title && <h3>{title}</h3>}
      <div className="gallery-view__content">
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 16, maxWidth: "80rem" }}>
          {items.map((item, i) => {
            // Do not render entries without images
            if (item.fileName === null) {
              return
            }
            return (
              <li key={item.catalogNo}>
                <GalleryImage item={item} index={i} />
              </li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}
