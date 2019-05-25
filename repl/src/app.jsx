import React from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import * as scope from "xrc"

const code = `
<Base>
  <Box
    p="6"
    m="5"
    d="flex"
    jfc="center"
    bg="fill.main"
  >
    <Box
      px="5"
      py="4"
      h="lg"
      rad="lg"
      d="inline-block"
      bsh="drop.1"
      cst="primary"
      tst="caps"
      ff="main"
      lh="0"
    >Hello World</Box>
  </Box>
</Base>
`

export default () => (
  <LiveProvider scope={scope} code={code.trim()}>
    <LivePreview />
    <LiveEditor />
    <LiveError />
  </LiveProvider>
)
