import { Link } from "../Link/Link"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>© 2026 Diz Harford. All rights reserved.</p>
        <Link to="privacy">Privacy & Terms</Link>
      </div>
    </footer>
  )
}
