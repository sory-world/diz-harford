import { Outlet, Scripts, ScrollRestoration } from "react-router"
import { TopBar } from "./components/TopBar/TopBar"
import "./styles/reset.css"
import "./styles/root.css"
import { Footer } from "./components/Footer/Footer"

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Artist portfolio and works." />
      </head>
      <body>
        <TopBar />
        <div className="view__content">
          <Outlet />
        </div>
        <footer />
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  )
}
