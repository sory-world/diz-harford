import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"
import { TopBar } from "./components/TopBar/TopBar"
import "./styles/reset.css"
import "./styles/root.css"
import { Footer } from "./components/Footer/Footer"

export default function Root() {
  const interFontUrl =
    "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Diz Harford archive 1966-2009." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href={interFontUrl} />
        <link
          rel="stylesheet"
          href={interFontUrl}
          media="print"
          onLoad={(event) => {
            event.currentTarget.media = "all"
          }}
        />
        <Meta />
        <Links />
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
