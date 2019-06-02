import React from "react"
import { Base } from "xrc"
import { MDXProvider } from "@mdx-js/react"
import { Root, Routes } from "react-static"
import { Link, Router } from "@reach/router"
import { Loading } from "components/loading"
import { components } from "./core/mdx"
import { fonts } from "./core/fonts"

export default () => (
  <Root>
    <Base fonts={fonts}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/repl">REPL</Link>
      </nav>
      <main>
        <React.Suspense fallback={<Loading />}>
          <MDXProvider components={components}>
            <Router>
              <Routes path="*" />
            </Router>
          </MDXProvider>
        </React.Suspense>
      </main>
    </Base>
  </Root>
)
