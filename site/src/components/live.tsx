import * as React from "react"
import theme from "prism-react-renderer/themes/oceanicNext"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import * as scope from "xrc"

const { colors, fontFamilies, fontSizes } = scope.MasterTheme

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

export const Provider = (props) => (
  <LiveProvider
    {...props}
    scope={scope}
    theme={theme}
    code={props.code.trim()}
  />
)

export const Editor = (props) => (
  <LiveEditor {...props} style={editorStyles} padding={padding} />
)

export const Error = (props) => <LiveError {...props} style={errorStyles} />

export const Preview = (props) => <LivePreview {...props} />
