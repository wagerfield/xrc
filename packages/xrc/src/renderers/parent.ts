import {
  compose,
  flexParentSet,
  FlexParentSetProps,
  FlexParentSetStyle,
  gridParentSet,
  GridParentSetProps,
  GridParentSetStyle
} from "onno-react"

export type ParentSetProps = FlexParentSetProps & GridParentSetProps

export type ParentSetStyle = FlexParentSetStyle & GridParentSetStyle

export const parentSet = compose<ParentSetProps, ParentSetStyle>({
  name: "parent",
  renderers: [flexParentSet, gridParentSet]
})
