import React from "react"
import "./Page.css"

export const Page = ({
  pageNav,
  children,
}: {
  pageNav: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <div className="page">
      {pageNav}
      <div className="page__content">{children}</div>
    </div>
  )
}
