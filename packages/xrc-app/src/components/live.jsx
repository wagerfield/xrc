import React from "react"
import theme from "prism-react-renderer/themes/oceanicNext"
import { LiveError, LiveEditor, LivePreview, LiveProvider } from "react-live"
import { Link } from "@reach/router"
import * as xrc from "xrc"

const { Box } = xrc

const scope = { Link, ...xrc }

const editor = {
  forward: ["padding"],
  padding: 16,
  style: {
    fontFamily: "code",
    fontSize: "sm"
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
  code = "<Text>Hello world</Text>",
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

export const Preview = (props) => <Box as={LivePreview} {...props} />

export const Editor = (props) => <Box as={LiveEditor} {...props} {...editor} />

export const Error = (props) => <Box as={LiveError} {...props} {...error} />
