import React from "react"
import { navigate } from "@reach/router"
import { Box, Button } from "xrc"
import { exampleToQuery } from "../core/utils"
import { Provider, Preview, Editor, Error } from "./live"

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
  <Box
    display="flex"
    overflow="auto"
    position="relative"
    flexDirection="column"
    {...props}
  />
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
    right="0"
    top="0"
    {...props}
  />
)

const transformCode = (code) => {
  return code.replace(/render\(\s*\)/, "render(null)")
}

export const REPL = ({
  code: initialCode,
  inline: initialInline,
  fullscreen,
  language,
  disabled,
  persist,
  preview,
  editor,
  toggle
}) => {
  const [code, setCode] = React.useState(initialCode)
  const [inline, setInline] = React.useState(initialInline)
  const exampleQuery = exampleToQuery({ code, inline })
  const buttonMargin = fullscreen ? 24 : 16
  const linkPath = editor ? "/view" : "/edit"
  if (persist) {
    React.useEffect(() => {
      const path = `${location.pathname}?${exampleQuery}`
      history.replaceState(null, null, path)
    })
  }
  return (
    <Provider
      code={code}
      inline={inline}
      language={language}
      disabled={disabled}
      transformCode={transformCode}
    >
      <REPLContainer className="repl" editor={editor} fullscreen={fullscreen}>
        {preview && (
          <REPLPanel className="preview-panel" order={{ [H]: 1 }}>
            <REPLButton
              className="preview-link"
              margin={buttonMargin}
              icon={editor ? "eye" : "edit"}
              title={editor ? "View" : "Edit"}
              onClick={() => navigate(`${linkPath}?${exampleQuery}`)}
            />
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
            {toggle && (
              <REPLButton
                className="editor-mode"
                margin={buttonMargin}
                text={inline ? "Render" : "Inline"}
                title={inline ? "Render" : "Inline"}
                onClick={() => setInline(!inline)}
              />
            )}
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
