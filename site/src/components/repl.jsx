import React from "react"
import { Provider, Preview, Editor, Error } from "components/live"

export const REPL = (props) => (
  <Provider {...props}>
    <Preview />
    <Editor />
    <Error />
  </Provider>
)
