import { useLocation } from "react-router"
import "./PageNav.css"
import { useEffect, useState } from "react"

export const PageNav = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const path = location.pathname
    if (!path.includes("series")) {
      return
    }
    const seriesPath = location.pathname.split("series")
    seriesPath[1].length > 1 && setIsOpen(true)
  }, [location])

  return <div className={`page-nav ${isOpen && "page-nav--open"}`}>{children}</div>
}
