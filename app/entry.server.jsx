import { ServerRouter } from "react-router"
import { isbot } from "isbot"
import { renderToReadableStream } from "react-dom/server.browser"

export const streamTimeout = 5_000

export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  routerContext,
) {
  const userAgent = request.headers.get("user-agent") || ""
  const stream = await renderToReadableStream(
    <ServerRouter context={routerContext} url={request.url} />,
    {
      onError(error) {
        responseStatusCode = 500
        console.error(error)
      },
    },
  )

  if (isbot(userAgent) || routerContext.isSpaMode) {
    try {
      await stream.allReady
    } catch {}
  }

  responseHeaders.set("Content-Type", "text/html")
  return new Response(stream, {
    headers: responseHeaders,
    status: responseStatusCode,
  })
}
