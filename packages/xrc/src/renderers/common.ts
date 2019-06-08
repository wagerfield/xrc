import {
  compose,
  colorStyle,
  ColorStyleProps,
  textStyle,
  TextStyleProps,
  backgroundSet,
  BackgroundSetProps,
  BackgroundSetStyle,
  borderSet,
  BorderSetProps,
  BorderSetStyle,
  displaySet,
  DisplaySetProps,
  DisplaySetStyle,
  layoutSet,
  LayoutSetProps,
  LayoutSetStyle,
  outlineSet,
  OutlineSetProps,
  OutlineSetStyle,
  spaceSet,
  SpaceSetProps,
  SpaceSetStyle,
  textSet,
  TextSetProps,
  TextSetStyle,
  transformSet,
  TransformSetProps,
  TransformSetStyle
} from "onno"
import { animationSet, AnimationSetProps, AnimationSetStyle } from "./animation"
import { childSet, ChildSetProps, ChildSetStyle } from "./child"
import { shadowSet, ShadowSetProps, ShadowSetStyle } from "./shadow"

export type CommonSetProps = ColorStyleProps &
  TextStyleProps &
  AnimationSetProps &
  BackgroundSetProps &
  BorderSetProps &
  DisplaySetProps &
  ChildSetProps &
  LayoutSetProps &
  OutlineSetProps &
  ShadowSetProps &
  SpaceSetProps &
  TextSetProps &
  TransformSetProps

export type CommonSetStyle = AnimationSetStyle &
  BackgroundSetStyle &
  BorderSetStyle &
  DisplaySetStyle &
  ChildSetStyle &
  LayoutSetStyle &
  OutlineSetStyle &
  ShadowSetStyle &
  SpaceSetStyle &
  TextSetStyle &
  TransformSetStyle

export const commonSet = compose<CommonSetProps, CommonSetStyle>({
  name: "common",
  renderers: [
    colorStyle,
    textStyle,
    animationSet,
    backgroundSet,
    borderSet,
    displaySet,
    childSet,
    layoutSet,
    outlineSet,
    shadowSet,
    spaceSet,
    textSet,
    transformSet
  ]
})
