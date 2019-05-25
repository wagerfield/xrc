import React from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

const code = `<h1>Hello World</h1>`

export default () => (
  <LiveProvider code={code}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)
