import React from "react"
import { Base, Box } from "xrc"
import { Router } from "@reach/router"
import { MDXProvider } from "@mdx-js/react"
import { Routes, Root, addPrefetchExcludes } from "react-static"
import { Loading } from "./components/loading"
import { Nav } from "./components/nav"
import { fonts } from "./core/fonts"
import { components } from "./core/mdx"
import Edit from "./dynamic/edit"
import View from "./dynamic/view"

// Add dynamic paths for example routes
addPrefetchExcludes([/(edit|view)/])

export default () => (
  <Root>
    <Base fonts={fonts("/fonts")}>
      <Box display="grid" height="100vh" gridTemplateRows="auto 1fr">
        <Nav
          links={[
            { path: "/docs", text: "Docs", key: "docs" },
            { path: "/edit", text: "REPL", key: "repl" },
            {
              href: "https://github.com/wagerfield/xrc",
              text: "GitHub",
              key: "github"
            }
          ]}
        />
        <MDXProvider components={components}>
          <React.Suspense fallback={<Loading />}>
            <Box as={Router} primary={false} component="main" overflow="auto">
              <Edit path="/edit/*" />
              <View path="/view/*" />
              <Routes default />
            </Box>
          </React.Suspense>
        </MDXProvider>
      </Box>
    </Base>
  </Root>
)
