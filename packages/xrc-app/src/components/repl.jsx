import React from "react"
import { Box } from "xrc"
import { Provider, Preview, Editor, Error } from "./live"

// Breakpoints
const V = "all"
const H = "lg"

const REPLContainer = (props) => (
  <Box
    display="grid"
    minHeight="1"
    height={{
      [H]: 1
    }}
    overflow={{
      [H]: "hidden"
    }}
    gridTemplateRows={{
      [V]: "1fr auto"
    }}
    gridTemplateColumns={{
      [H]: "640px 1fr"
    }}
    {...props}
  />
)

const REPLPanel = (props) => (
  <Box display="flex" overflow="auto" flexDirection="column" {...props} />
)

const REPLWrapper = (props) => (
  <Box display="flex" overflow="auto" flex="1 0 auto" {...props} />
)

const REPLChild = (props) => <Box flex="1 0 auto" {...props} />

export const REPL = (props) => (
  <Provider {...props}>
    <REPLContainer className="repl">
      <REPLPanel className="preview-panel" order={{ [H]: 1 }}>
        <REPLWrapper className="preview-wrapper" order={{ [H]: 1 }}>
          <REPLChild as={Preview} className="preview" />
        </REPLWrapper>
        <REPLWrapper className="error-wrapper" flexGrow="0">
          <REPLChild as={Error} className="error" />
        </REPLWrapper>
      </REPLPanel>
      <REPLPanel className="editor-panel">
        <REPLWrapper className="editor-wrapper">
          <REPLChild as={Editor} className="editor" />
        </REPLWrapper>
      </REPLPanel>
    </REPLContainer>
  </Provider>
)
