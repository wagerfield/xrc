import React from "react"
import { Box, Button } from "xrc"
import { Provider, Preview, Editor, Error, Link } from "./live"

// Breakpoints
const V = "all"
const H = "lg"

const containerStyles = (editor, fullscreen) => {
  const styles = { position: "relative" }
  if (fullscreen) {
    Object.assign(styles, {
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
    })
  }
  return styles
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
  <Button
    zIndex="1"
    variant="alternative"
    position="absolute"
    margin="24"
    right="0"
    top="0"
    {...props}
  />
)

const handleChange = (code) => {
  console.log(code)
  return code
}

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
      {preview && (
        <REPLLink
          as={Link}
          className="preview-link"
          to={editor ? "/view" : "/edit"}
          title={editor ? "View" : "Edit"}
          children={editor ? "View" : "Edit"}
          inline={inline}
        />
      )}
      {preview && (
        <REPLPanel className="preview-panel" order={{ [H]: 1 }}>
          <REPLWrapper className="preview-wrapper" order={{ [H]: 1 }}>
            <REPLChild
              as={Preview}
              className="preview"
              minHeight={!fullscreen && "160"}
              boxShadow={!fullscreen && "inset 0 0 1px #202020"}
            />
          </REPLWrapper>
          <REPLWrapper className="error-wrapper" flexGrow="0">
            <REPLChild className="error" as={Error} />
          </REPLWrapper>
        </REPLPanel>
      )}
      {editor && (
        <REPLPanel className="editor-panel">
          <REPLWrapper className="editor-wrapper">
            <REPLChild
              as={Editor}
              className="editor"
              minHeight={fullscreen && "160"}
            />
          </REPLWrapper>
        </REPLPanel>
      )}
    </REPLContainer>
  </Provider>
)
