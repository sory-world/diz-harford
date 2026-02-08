import { Link } from "~/components/Link/Link"
import { Link as RouterLink } from "react-router"
import "./TopBar.css"

export const TopBar = () => {
  return (
    <header className="top-bar">
      <div className="top-bar__icon">
        <RouterLink to="/">DIZ HARFORD</RouterLink>
      </div>
      <div className="top-bar__links">
        <Link to="series">Series</Link>
        <Link to="work">Work</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </header>
  )
}
