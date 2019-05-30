import * as React from "react"
import theme from "prism-react-renderer/themes/oceanicNext"
import { LiveError, LiveEditor, LivePreview, LiveProvider } from "react-live"
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

export const Preview = () => <LivePreview />

export const Editor = () => <LiveEditor style={editorStyles} />

export const Error = () => <LiveError style={errorStyles} />
