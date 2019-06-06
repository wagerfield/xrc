import React from "react"
import { Provider, Preview, Editor, Error } from "./live"

export const REPL = (props) => (
  <Provider {...props}>
    <Preview />
    <Editor />
    <Error />
  </Provider>
)
