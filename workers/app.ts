import { createRequestHandler } from "react-router"

type WorkerEnv = Record<string, unknown>
type WorkerExecutionContext = {
  waitUntil(promise: Promise<unknown>): void
  passThroughOnException(): void
}

declare module "react-router" {
  interface AppLoadContext {
    cloudflare: {
      env: WorkerEnv
      ctx: WorkerExecutionContext
    }
  }
}

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
)

export default {
  async fetch(request: Request, env: WorkerEnv, ctx: WorkerExecutionContext) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    })
  },
}
