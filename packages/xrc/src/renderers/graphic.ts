import {
  compose,
  colorSet,
  ColorSetProps,
  ColorSetStyle,
  positionSet,
  PositionSetProps,
  PositionSetStyle,
  spaceSet,
  SpaceSetProps,
  SpaceSetStyle
} from "onno"
import { animationSet, AnimationSetProps, AnimationSetStyle } from "./animation"
import { displaySet, DisplaySetProps, DisplaySetStyle } from "./display"
import { childSet, ChildSetProps, ChildSetStyle } from "./child"

export type GraphicSetProps = AnimationSetProps &
  ChildSetProps &
  ColorSetProps &
  DisplaySetProps &
  PositionSetProps &
  SpaceSetProps

export type GraphicSetStyle = AnimationSetStyle &
  ChildSetStyle &
  ColorSetStyle &
  DisplaySetStyle &
  PositionSetStyle &
  SpaceSetStyle

export const graphicSet = compose<GraphicSetProps, GraphicSetStyle>({
  name: "graphic",
  renderers: [
    animationSet,
    childSet,
    colorSet,
    displaySet,
    positionSet,
    spaceSet
  ]
})
