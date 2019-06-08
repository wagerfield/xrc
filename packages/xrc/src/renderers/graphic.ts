import {
  compose,
  layoutSet,
  LayoutSetProps,
  LayoutSetStyle,
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
  LayoutSetProps &
  SpaceSetProps

export type GraphicSetStyle = AnimationSetStyle &
  ChildSetStyle &
  DisplaySetStyle &
  LayoutSetStyle &
  SpaceSetStyle

export const graphicSet = compose<GraphicSetProps, GraphicSetStyle>({
  name: "graphic",
  renderers: [animationSet, childSet, displaySet, layoutSet, spaceSet]
})
