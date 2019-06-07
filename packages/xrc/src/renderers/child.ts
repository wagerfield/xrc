import {
  compose,
  flexChildSet,
  FlexChildSetProps,
  FlexChildSetStyle,
  gridChildSet,
  GridChildSetProps,
  GridChildSetStyle
} from "onno-react"

export type ChildSetProps = FlexChildSetProps & GridChildSetProps

export type ChildSetStyle = FlexChildSetStyle & GridChildSetStyle

export const childSet = compose<ChildSetProps, ChildSetStyle>({
  name: "child",
  renderers: [flexChildSet, gridChildSet]
})
