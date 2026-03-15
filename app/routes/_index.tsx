import { useLoaderData } from "react-router"
import { items } from "../data/home.server"
import type { CollectionItem } from "~/types/CollectionItem"
import { HomeImage } from "~/components/HomeImage/HomeImage"
import { useEffect, useState } from "react"
import "~/styles/home.css"
type LoaderData = { items: CollectionItem[] }
import { motion } from "motion/react"

export async function loader(): Promise<LoaderData> {
  return { items: items }
}

export default function Index() {
  const { items } = useLoaderData() as LoaderData
  const [image, setImage] = useState<CollectionItem | null>(null)

  useEffect(() => {
    setImage(items[Math.floor(Math.random() * items.length)])
  }, [items])

  if (!image) {
    return null
  }

  return (
    <motion.main
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <HomeImage item={image} />
    </motion.main>
  )
}
