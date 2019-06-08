import {
  compose,
  backgroundSet,
  BackgroundSetProps,
  BackgroundSetStyle,
  borderSet,
  BorderSetProps,
  BorderSetStyle,
  boxShadow,
  BoxShadowProps,
  BoxShadowStyle,
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

export type ImageSetProps = AnimationSetProps &
  BackgroundSetProps &
  BorderSetProps &
  BoxShadowProps &
  ChildSetProps &
  DisplaySetProps &
  LayoutSetProps &
  SpaceSetProps

export type ImageSetStyle = AnimationSetStyle &
  BackgroundSetStyle &
  BorderSetStyle &
  BoxShadowStyle &
  ChildSetStyle &
  DisplaySetStyle &
  LayoutSetStyle &
  SpaceSetStyle

export const imageSet = compose<ImageSetProps, ImageSetStyle>({
  name: "image",
  renderers: [
    animationSet,
    backgroundSet,
    borderSet,
    boxShadow,
    childSet,
    displaySet,
    layoutSet,
    spaceSet
  ]
})
