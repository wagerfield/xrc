import React from "react"
import { Root, Routes } from "react-static"
import { Link, Router } from "@reach/router"
import { Loading } from "components/loading"

export default () => (
  <Root>
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
  </Root>
)
