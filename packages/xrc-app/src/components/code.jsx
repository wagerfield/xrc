import React from "react"
import { Provider, Preview, Editor, Error } from "./live"

const getLang = ({ className }) =>
  className && className.replace("language-", "")

export const Code = (props) => {
  const providerProps = {
    language: getLang(props),
    disabled: !props.edit,
    inline: !!props.inline,
    code: props.children
  }
  return (
    <Provider {...providerProps}>
      {props.preview && <Preview />}
      <Editor />
      {props.edit && <Error />}
    </Provider>
  )
}
