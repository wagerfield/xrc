import React from "react"
import { Box, Button } from "xrc"
import { Provider, Preview, Editor, Error, Link } from "./live"

// Breakpoints
const V = "all"
const H = "lg"

const containerStyles = (editor, fullscreen) => {
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
      [V]: editor ? "1fr auto / 1fr" : "1fr",
      [H]: editor ? "1fr / 640px 1fr" : "1fr"
    }
  }
}

const REPLContainer = ({ editor, fullscreen, ...props }) => (
  <Box {...containerStyles(editor, fullscreen)} {...props} />
)

const REPLPanel = (props) => (
  <Box display="flex" overflow="auto" flexDirection="column" {...props} />
)

const REPLWrapper = (props) => (
  <Box display="flex" overflow="auto" flex="1 0 auto" {...props} />
)

const REPLChild = (props) => (
  <Box position="relative" flex="1 0 auto" {...props} />
)

const REPLLink = (props) => (
  <Button position="absolute" right="0" top="0" margin="4" {...props} />
)

export const REPL = ({
  code,
  inline,
  language,
  disabled,
  fullscreen,
  preview,
  editor
}) => (
  <Provider code={code} inline={inline} language={language} disabled={disabled}>
    <REPLContainer className="repl" editor={editor} fullscreen={fullscreen}>
      {/* <REPLLink
        className="preview-button"
        as={Link}
        to={editor ? "/view" : "/edit"}
        inline={inline}
      >
        {editor ? "View" : "Edit"}
      </REPLLink> */}
      {preview && (
        <REPLPanel className="preview-panel" order={{ [H]: 1 }}>
          <REPLWrapper className="preview-wrapper" order={{ [H]: 1 }}>
            <REPLChild className="preview" as={Preview} />
          </REPLWrapper>
          <REPLWrapper className="error-wrapper" flexGrow="0">
            <REPLChild as={Error} className="error" />
          </REPLWrapper>
        </REPLPanel>
      )}
      {editor && (
        <REPLPanel className="editor-panel">
          <REPLWrapper className="editor-wrapper">
            <REPLChild className="editor" as={Editor} />
          </REPLWrapper>
        </REPLPanel>
      )}
    </REPLContainer>
  </Provider>
)
