import { join, resolve } from "path"

const DOCS = resolve("../docs")
const PAGES = resolve("src/pages")

export default {
  entry: "index.tsx",
  getRoutes() {
    return [{ path: "testing", template: join(DOCS, "getting-started.mdx") }]
  },
  plugins: [
    ["react-static-plugin-typescript"],
    ["react-static-plugin-reach-router"],
    ["react-static-plugin-source-filesystem", { location: PAGES }],
    ["react-static-plugin-mdx", { includePaths: [DOCS] }]
  ],
  devServer: {
    host: "0.0.0.0",
    port: 5000
  }
}
