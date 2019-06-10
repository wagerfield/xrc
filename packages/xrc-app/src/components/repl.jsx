import React from "react"
import { Box } from "xrc"
import { Provider, Preview, Editor, Error } from "./live"

// Breakpoints
const V = "all"
const H = "lg"

const REPLPanel = (props) => (
  <Box
    {...props}
    // display="flex"
    minHeight="0"
    // flexDirection="column"
    overflow={{ [H]: "auto" }}
    order={{ [H]: props.order }}
  />
)

const REPLChild = (props) => (
  <Box {...props} minHeight={1} order={{ [H]: props.order }} />
)

export const REPL = (props) => (
  <Provider {...props}>
    <Box
      className="repl"
      minHeight="1"
      display="grid"
      height={{
        [H]: 1
      }}
      overflow={{
        [H]: "hidden"
      }}
      gridTemplateRows={{
        [V]: "minmax(auto, 1fr) auto",
        [H]: "none"
      }}
      gridTemplateColumns={{
        [V]: "none",
        [H]: "1fr 1fr"
      }}
    >
      <REPLPanel className="preview-panel" order="2">
        <REPLChild as={Preview} className="preview" order="2" />
        <REPLChild as={Error} className="error" order="1" />
      </REPLPanel>
      <REPLPanel className="editor-panel" order="1">
        <REPLChild as={Editor} className="editor" />
      </REPLPanel>
    </Box>
  </Provider>
)
