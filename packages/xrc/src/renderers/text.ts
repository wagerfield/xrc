import { compose } from "onno-react"
import { commonSet, CommonSetProps, CommonSetStyle } from "./common"

export type TextSetProps = CommonSetProps

export type TextSetStyle = CommonSetStyle

export const textSet = compose<TextSetProps, TextSetStyle>({
  name: "text",
  renderers: [commonSet]
})
