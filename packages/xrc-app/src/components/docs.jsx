import React from "react"
import { Box } from "xrc"

// Breakpoints
const V = "all"
const H = "lg"

const DocsMenu = (props) => (
  <Box as="nav" overflow="auto" background="overlay.light" {...props} />
)

const DocsContent = (props) => <Box overflow="auto" {...props} />

export const Docs = (props) => {
  console.log(props)
  return (
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
      <DocsMenu className="docs-menu" />
      <DocsContent className="docs-content">{props.children}</DocsContent>
    </Box>
  )
}
