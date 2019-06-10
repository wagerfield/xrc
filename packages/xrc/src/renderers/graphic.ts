import {
  compose,
  fill,
  FillProps,
  FillStyle,
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
  DisplaySetProps &
  FillProps &
  PositionSetProps &
  SpaceSetProps

export type GraphicSetStyle = AnimationSetStyle &
  ChildSetStyle &
  DisplaySetStyle &
  FillStyle &
  PositionSetStyle &
  SpaceSetStyle

export const graphicSet = compose<GraphicSetProps, GraphicSetStyle>({
  name: "graphic",
  renderers: [animationSet, childSet, displaySet, fill, positionSet, spaceSet]
})
