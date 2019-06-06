import React from "react"
import { resolve } from "path"
import { mapPath } from "./src/core/utils"

const DOCS_DIR = resolve("../../docs")
const PAGES_DIR = resolve("src/pages")

export default {
  entry: "index.jsx",
  siteRoot: "https://xrc.netlify.com",
  plugins: [
    "react-static-plugin-xrc",
    [
      "react-static-plugin-mdx",
      {
        includePaths: [DOCS_DIR]
      }
    ],
    [
      "react-static-plugin-source-filesystem",
      {
        location: PAGES_DIR
      }
    ]
    // [
    //   "react-static-plugin-source-filesystem",
    //   {
    //     location: DOCS_DIR,
    //     pathPrefix: "docs",
    //     createRoute(route) {
    //       route.path = mapPath(route.path)
    //       return route
    //     }
    //   }
    // ]
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
        <title>React Components</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
