import React from "react"
import { Base } from "xrc"
import { Router } from "@reach/router"
import { Routes, Root } from "react-static"
import { MDXProvider } from "@mdx-js/react"
import { Loading } from "./components/loading"
import { Nav } from "./components/nav"
import { fonts } from "./core/fonts"
import { components } from "./core/mdx"

export default () => (
  <Root>
    <Base fonts={fonts("/fonts")}>
      <Nav
        links={[
          { path: "/docs", text: "Docs", key: "docs" },
          { path: "/repl", text: "REPL", key: "repl" }
        ]}
      />
      {/* <MDXProvider components={components}>
        <React.Suspense fallback={<Loading />}>
          <Router component="main">
            <Routes default />
          </Router>
        </React.Suspense>
      </MDXProvider> */}
    </Base>
  </Root>
)
