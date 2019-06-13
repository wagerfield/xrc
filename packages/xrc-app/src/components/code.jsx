import React from "react"
import { REPL } from "./repl"

const getLang = ({ className }) => {
  return className && className.replace("language-", "")
}

export const Code = (props) => (
  <REPL
    language={getLang(props)}
    disabled={!props.edit}
    preview={props.preview}
    inline={props.inline}
    code={props.children}
    editor={true}
  />
)
