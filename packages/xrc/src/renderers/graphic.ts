import {
  compose,
  borderSet,
  BorderSetProps,
  BorderSetStyle,
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
  BorderSetProps &
  ChildSetProps &
  DisplaySetProps &
  ColorSetProps &
  PositionSetProps &
  SpaceSetProps

export type GraphicSetStyle = AnimationSetStyle &
  BorderSetStyle &
  ChildSetStyle &
  DisplaySetStyle &
  ColorSetStyle &
  PositionSetStyle &
  SpaceSetStyle

export const graphicSet = compose<GraphicSetProps, GraphicSetStyle>({
  name: "graphic",
  renderers: [
    animationSet,
    borderSet,
    childSet,
    colorSet,
    displaySet,
    positionSet,
    spaceSet
  ]
})
