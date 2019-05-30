import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Root, Routes } from "react-static"
import { Link, Router } from "@reach/router"
import { Loading } from "components/loading"
import { components } from "./core/mdx"

export default () => (
  <Root>
    <MDXProvider components={components}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/repl">REPL</Link>
      </nav>
      <main>
        <React.Suspense fallback={<Loading />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </main>
    </MDXProvider>
  </Root>
)
