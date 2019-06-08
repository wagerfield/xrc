import { compose } from "onno"
import { commonSet, CommonSetProps, CommonSetStyle } from "./common"
import { parentSet, ParentSetProps, ParentSetStyle } from "./parent"

export type BoxSetProps = CommonSetProps & ParentSetProps

export type BoxSetStyle = CommonSetStyle & ParentSetStyle

export const boxSet = compose<BoxSetProps, BoxSetStyle>({
  name: "box",
  renderers: [commonSet, parentSet]
})
