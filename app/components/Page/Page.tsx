import React from "react"
import { motion } from "motion/react"

export const Page = ({
  pageNav,
  children,
}: {
  pageNav: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {pageNav}
      <div className="page__content">{children}</div>
    </motion.div>
  )
}
