import React from "react"
import { Provider, Editor, Error, Preview } from "components/live"

const getLang = ({ className }) =>
  className && className.replace("language-", "")

export const Code = (props) => {
  const providerProps = {
    language: getLang(props),
    noInline: !!props.inline,
    disabled: !props.edit,
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
