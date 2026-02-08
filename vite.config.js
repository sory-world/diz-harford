import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import { reactRouter } from "@react-router/dev/vite"

const appDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "app")

export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    alias: {
      "~": appDir,
      "~/": `${appDir}/`,
    },
  },
})
