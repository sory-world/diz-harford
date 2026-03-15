import { PageNav } from "~/components/PageNav/PageNav"
import { Outlet, useLocation } from "react-router"
import { Page } from "~/components/Page/Page"
import { Link } from "~/components/Link/Link"
import { motion } from "motion/react"

export default function Series() {
  const location = useLocation()

  return (
    <main>
      <Page
        pageNav={
          <PageNav>
            <Link to="a-nice-clean-game">A Nice Clean Game</Link>
            <Link to="early-works">Early Works</Link>
            <Link to="fields-of-blood">Fields of Blood</Link>
            <Link to="how-clean-my-country">How Clean my Country</Link>
            <Link to="i-was-here">I Was Here</Link>
            <Link to="lady-sings-the-blues">Lady Sings the Blues</Link>
            <Link to="miscellaneous">Miscellaneous</Link>
            <Link to="salome-and-the-boxers">Salome and the Boxers</Link>
            <Link to="she-and-fella">She and Fella</Link>
            <Link to="the-ballad-of-reading-gaol">The Ballad of Reading Gaol</Link>
            <Link to="the-garden">The Garden</Link>
            <Link to="the-ladies-of-the-night">The Ladies of the Night</Link>
            <Link to="ulysses">Ulysses</Link>
          </PageNav>
        }
      >
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </Page>
    </main>
  )
}
