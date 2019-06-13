import React from "react"
import { Box } from "xrc"
import { Provider, Preview, Editor, Error } from "./live"

// Breakpoints
const V = "all"
const H = "lg"

const containerStyles = (edit, fullscreen) => {
  if (!fullscreen) return null
  return {
    display: "grid",
    minHeight: 1,
    height: {
      [H]: 1
    },
    overflow: {
      [H]: "hidden"
    },
    gridTemplate: {
      [V]: edit ? "1fr auto / 1fr" : "1fr",
      [H]: edit ? "1fr / 640px 1fr" : "1fr"
    }
  }
}

const REPLContainer = ({ edit, fullscreen, ...props }) => (
  <Box {...containerStyles(edit, fullscreen)} {...props} />
)

const REPLPanel = (props) => (
  <Box display="flex" overflow="auto" flexDirection="column" {...props} />
)

const REPLWrapper = (props) => (
  <Box display="flex" overflow="auto" flex="1 0 auto" {...props} />
)

const REPLChild = (props) => <Box flex="1 0 auto" {...props} />

export const REPL = ({ edit, fullscreen, ...props }) => (
  <Provider {...props}>
    <REPLContainer className="repl" edit={edit} fullscreen={fullscreen}>
      <REPLPanel className="preview-panel" order={{ [H]: 1 }}>
        <REPLWrapper className="preview-wrapper" order={{ [H]: 1 }}>
          <REPLChild className="preview" as={Preview} />
        </REPLWrapper>
        <REPLWrapper className="error-wrapper" flexGrow="0">
          <REPLChild as={Error} className="error" />
        </REPLWrapper>
      </REPLPanel>
      {edit && (
        <REPLPanel className="editor-panel">
          <REPLWrapper className="editor-wrapper">
            <REPLChild className="editor" as={Editor} />
          </REPLWrapper>
        </REPLPanel>
      )}
    </REPLContainer>
  </Provider>
)
