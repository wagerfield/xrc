import React from "react"
import theme from "prism-react-renderer/themes/oceanicNext"
import { LiveError, LiveEditor, LivePreview, LiveProvider } from "react-live"
import { Link } from "@reach/router"
import * as xrc from "xrc"

const { colors, fontFamilies, fontSizes } = xrc.MasterTheme

const scope = { Link, ...xrc }

const padding = "16px"

// editor textarea:focus {
//   outline: 4px solid #48F;
//   outline-offset: -4px;
//   z-index: 1;
// }

const editorStyles = {
  fontFamily: fontFamilies.code,
  fontSize: fontSizes[0].value
}

const errorStyles = {
  ...editorStyles,
  color: colors.text.inv,
  background: "#C34",
  margin: 0,
  padding
}

const trim = (string) => string && string.trim()

export const Provider = ({
  code = "<h1>Hello world</h1>",
  language = "jsx",
  disabled = false,
  inline = false,
  children
}) => (
  <LiveProvider
    scope={scope}
    theme={theme}
    children={children}
    disabled={disabled}
    language={language}
    noInline={inline}
    code={trim(code)}
  />
)

export const Preview = () => <LivePreview />

export const Editor = () => (
  <LiveEditor style={editorStyles} padding={padding} />
)

export const Error = () => <LiveError style={errorStyles} />
