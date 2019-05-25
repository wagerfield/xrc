import React from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import theme from "prism-react-renderer/themes/oceanicNext"
import * as scope from "xrc"

const code = `
<div>
  <Base/>
  <h1>This is an H1<br/>on two lines</h1>
  <h2>This is an H2<br/>on two lines</h2>
  <h3>This is an H3<br/>on two lines</h3>
  <p>This is a nice and short<br/>paragraph on two lines.</p>
  <Box
    px="4"
    py="5"
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
      bsh="inner.static"
      cst="primary"
      tst="caps"
      lh="0"
    >Hello World</Box>
  </Box>
</div>
`

const { Box, MasterTheme } = scope

const padding = "16px"

// editor textarea:focus {
//   outline: 4px solid #48F;
//   outline-offset: -4px;
//   z-index: 1;
// }

const editor = {
  fontFamily: MasterTheme.fontFamilies.code,
  fontSize: MasterTheme.fontSizes[0].value
}

const error = {
  ...editor,
  color: MasterTheme.colors.text.inv,
  background: "#C34",
  margin: 0,
  padding
}

export default () => (
  <LiveProvider theme={theme} scope={scope} code={code.trim()}>
    <Box display="grid" minHeight="100vh">
      <Box>
        <LivePreview />
      </Box>
      <Box>
        <LiveEditor style={editor} padding={padding} />
        <LiveError style={error} />
      </Box>
    </Box>
  </LiveProvider>
)
