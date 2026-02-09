import { useEffect, useId, useState } from "react"
import { Link } from "~/components/Link/Link"
import { Link as RouterLink } from "react-router"
import { LinkButton } from "../LinkButton/LinkButton"
import "./TopBar.css"

const Links = ({ className, onNavigate }: { className: string; onNavigate?: () => void }) => (
  <nav className={className} aria-label="Primary">
    <Link to="series">Series</Link>
    <Link to="work">Work</Link>
    <Link to="about">About</Link>
    <Link to="contact">Contact</Link>
  </nav>
)

export const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isMenuOpen])

  return (
    <header className="top-bar" data-open={isMenuOpen ? "true" : "false"}>
      <div className="top-bar__row">
        <div className="top-bar__icon">
          <RouterLink to="/">DIZ HARFORD</RouterLink>
        </div>

        <div className="top-bar__links">
          <Links className="top-bar__links-inner" />
        </div>

        <div className="top-bar__menu-button">
          <LinkButton
            aria-expanded={isMenuOpen}
            aria-controls={panelId}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </LinkButton>
        </div>
      </div>

      <div id={panelId} className="top-bar__panel" hidden={!isMenuOpen}>
        <Links className="top-bar__panel-links" />
      </div>
    </header>
  )
}
