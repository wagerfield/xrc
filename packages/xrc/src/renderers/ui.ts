import {
  compose,
  marginSet,
  MarginSetProps,
  MarginSetStyle,
  positionSet,
  PositionSetProps,
  PositionSetStyle
} from "onno-react"
import { animationSet, AnimationSetProps, AnimationSetStyle } from "./animation"
import { displaySet, DisplaySetProps, DisplaySetStyle } from "./display"
import { childSet, ChildSetProps, ChildSetStyle } from "./child"
import { widthSet, WidthSetProps, WidthSetStyle } from "./width"

export type UISetProps = AnimationSetProps &
  ChildSetProps &
  DisplaySetProps &
  MarginSetProps &
  PositionSetProps &
  WidthSetProps

export type UISetStyle = AnimationSetStyle &
  ChildSetStyle &
  DisplaySetStyle &
  MarginSetStyle &
  PositionSetStyle &
  WidthSetStyle

export const uiSet = compose<UISetProps, UISetStyle>({
  name: "ui",
  renderers: [
    animationSet,
    childSet,
    displaySet,
    marginSet,
    positionSet,
    widthSet
  ]
})
