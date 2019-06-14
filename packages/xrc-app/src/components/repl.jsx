import React, { useEffect, useState } from "react"
import { navigate } from "@reach/router"
import { Box, Button } from "xrc"
import { exampleToQuery } from "../core/utils"
import { Provider, Preview, Editor, Error } from "./live"

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

const REPLButton = (props) => (
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

export const REPL = ({
  code: initialCode,
  inline: initialInline,
  fullscreen,
  language,
  disabled,
  persist,
  preview,
  editor
}) => {
  const [code, setCode] = useState(initialCode)
  const [inline, setInline] = useState(initialInline)
  const exampleQuery = exampleToQuery({ code, inline })
  const linkPath = editor ? "/view" : "/edit"
  const linkTitle = editor ? "View" : "Edit"
  if (persist) {
    useEffect(() => {
      const examplePath = `${location.pathname}?${exampleQuery}`
      history.replaceState(null, null, examplePath)
    })
  }
  return (
    <Provider
      code={code}
      inline={inline}
      language={language}
      disabled={disabled}
    >
      <REPLContainer className="repl" editor={editor} fullscreen={fullscreen}>
        {preview && (
          <REPLButton
            className="preview-link"
            title={linkTitle}
            children={linkTitle}
            onClick={() => navigate(`${linkPath}?${exampleQuery}`)}
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
                onChange={setCode}
              />
            </REPLWrapper>
          </REPLPanel>
        )}
      </REPLContainer>
    </Provider>
  )
}
