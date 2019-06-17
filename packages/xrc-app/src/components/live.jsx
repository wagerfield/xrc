import React from "react"
import theme from "prism-react-renderer/themes/oceanicNext"
import { Link } from "@reach/router"
import { LiveError, LiveEditor, LivePreview, LiveProvider } from "react-live"
import * as xrc from "xrc"
import { Grid } from "../components/grid"

const { Box } = xrc

const scope = { Grid, Link, ...xrc }

const editor = {
  forward: ["padding"],
  padding: 16,
  style: {
    fontFamily: "code",
    fontSize: "xs"
  },
  css: {
    "textarea:focus": {
      outline: "main",
      outlineOffset: "inner"
    }
  }
}

const error = {
  style: {
    ...editor.style,
    padding: editor.padding,
    background: "#C34",
    overflow: "auto",
    color: "text.inv",
    margin: 0
  }
}

const trim = (string) => string && string.trim()

export const Provider = ({
  code = "<Box />",
  language = "jsx",
  disabled = false,
  inline = false,
  transformCode,
  children
}) => (
  <LiveProvider
    scope={scope}
    theme={theme}
    transformCode={transformCode}
    children={children}
    disabled={disabled}
    language={language}
    noInline={inline}
    code={trim(code)}
  />
)

export const Preview = (props) => <Box as={LivePreview} {...props} />

export const Editor = (props) => <Box as={LiveEditor} {...props} {...editor} />

export const Error = (props) => <Box as={LiveError} {...props} {...error} />
