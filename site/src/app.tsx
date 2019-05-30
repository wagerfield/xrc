import * as React from "react"
import { Root, Routes } from "react-static"
import { Link, Router } from "@reach/router"
import { Loading } from "components/loading"

export default () => (
  <Root>
    <nav>
      <Link to="/">Index</Link>
      <Link to="/about">About</Link>
      <Link to="/testing">Testing</Link>
    </nav>
    <main className="content">
      <React.Suspense fallback={<Loading />}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </main>
  </Root>
)
