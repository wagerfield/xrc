import { join, parse, resolve } from "path"
import { sync } from "glob"

const DOCS_DIR = resolve("../docs")
const PAGES_DIR = resolve("src/pages")
const ROUTE_MAP = {
  readme: "docs"
}

const mapFileName = (name) => ROUTE_MAP[name] || name

export default {
  entry: "index.tsx",
  getRoutes() {
    return sync(join(DOCS_DIR, "*")).map((path) => ({
      path: mapFileName(parse(path).name),
      template: path
    }))
  },
  plugins: [
    ["react-static-plugin-typescript"],
    ["react-static-plugin-reach-router"],
    ["react-static-plugin-source-filesystem", { location: PAGES_DIR }],
    ["react-static-plugin-mdx", { includePaths: [DOCS_DIR] }]
  ],
  devServer: {
    host: "0.0.0.0",
    port: 5000
  }
}
