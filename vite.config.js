import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import { cloudflare } from "@cloudflare/vite-plugin"
import { reactRouter } from "@react-router/dev/vite"

const appDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "app")

export default defineConfig({
  plugins: [reactRouter(), cloudflare({ viteEnvironment: { name: "ssr" } })],
  resolve: {
    alias: {
      "~": appDir,
      "~/": `${appDir}/`,
    },
  },
})
