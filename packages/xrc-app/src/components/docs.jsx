import React from "react"
import { Box } from "xrc"

// Breakpoints
const V = "all"
const H = "lg"

const DocsPanel = (props) => <Box overflow="auto" {...props} />

const DocsMenu = (props) => (
  <Box minHeight="1" background="fill.alt" {...props} />
)

const DocsContent = (props) => <Box marginY="2rem" {...props} />

export const Docs = ({ children }) => (
  <Box
    className="docs"
    height="1"
    display="grid"
    overflow="hidden"
    gridTemplateRows={{
      [V]: "auto 1fr",
      [H]: "1fr"
    }}
    gridTemplateColumns={{
      [H]: "240px 1fr"
    }}
  >
    <DocsPanel className="menu-panel">
      <DocsMenu className="menu" as="nav" />
    </DocsPanel>
    <DocsPanel
      className="content-panel"
      display="grid"
      gridTemplateColumns="minmax(1rem, 1fr) minmax(auto, 800px) minmax(1rem, 1fr)"
    >
      <DocsContent className="content" as="article" gridColumn="2">
        {children}
      </DocsContent>
    </DocsPanel>
  </Box>
)
