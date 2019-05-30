import React from "react"
import { Provider, Editor, Error, Preview } from "components/live"

export const Code = ({ children, className }) => {
  const match = className && className.match(/\w+$/)
  const language = match && match[0]
  return language === "jsx" ? (
    <Provider code={children} language={language}>
      <Preview />
      <Editor />
      <Error />
    </Provider>
  ) : (
    <code>{children}</code>
  )
}
