import { sync } from "glob"
import { join, resolve } from "path"
import { mapPath } from "./src/core/utils"

const DOCS_DIR = resolve("../docs")
const PAGES_DIR = resolve("src/pages")

export default {
  entry: "index.jsx",
  getRoutes() {
    return sync(join(DOCS_DIR, "**/*")).map((path) => {
      // console.log(mapPath(path.replace(DOCS_DIR, "")))
      return {
        path: mapPath(path.replace(DOCS_DIR, "")),
        template: path
      }
    })
  },
  plugins: [
    ["react-static-plugin-reach-router"],
    ["react-static-plugin-source-filesystem", { location: PAGES_DIR }],
    ["react-static-plugin-mdx", { includePaths: [DOCS_DIR] }]
  ],
  devServer: {
    host: "0.0.0.0",
    port: 5000
  }
}
