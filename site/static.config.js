import React from "react"
import { sync } from "glob"
import { watch } from "chokidar"
import { join, resolve, relative } from "path"
import { rebuildRoutes } from "react-static/node"
import { mapPath } from "./src/core/utils"

const MD_REGEX = /mdx?$/
const DOCS_DIR = resolve("../docs")
const DOCS_GLOB = join(DOCS_DIR, "**/*")
const PAGES_DIR = resolve("src/pages")

let watcher = null

function watchFiles() {
  if (!watcher) {
    watcher = watch(DOCS_DIR, { ignoreInitial: true })
    watcher.on("unlink", rebuildRoutes)
    watcher.on("add", rebuildRoutes)
  }
}

export default {
  entry: "index.jsx",
  siteRoot: "https://xrc.netlify.com",
  getRoutes({ stage }) {
    if (stage !== "prod") watchFiles()
    return sync(DOCS_GLOB).reduce((result, path) => {
      if (MD_REGEX.test(path)) {
        result.push({
          path: mapPath(relative(DOCS_DIR, path)),
          template: path
        })
      }
      return result
    }, [])
  },
  plugins: [
    ["react-static-plugin-reach-router"],
    ["react-static-plugin-source-filesystem", { location: PAGES_DIR }],
    ["react-static-plugin-mdx", { includePaths: [DOCS_DIR] }]
  ],
  devServer: {
    host: "0.0.0.0",
    port: 5000
  },
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>xrc</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
