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
  colorSet,
  ColorSetProps,
  ColorSetStyle,
  colorStyle,
  ColorStyleProps,
  displaySet,
  DisplaySetProps,
  DisplaySetStyle,
  flexSet,
  FlexSetProps,
  FlexSetStyle,
  gridSet,
  GridSetProps,
  GridSetStyle,
  layoutSet,
  LayoutSetProps,
  LayoutSetStyle,
  spaceSet,
  SpaceSetProps,
  SpaceSetStyle,
  textSet,
  TextSetProps,
  TextSetStyle,
  textStyle,
  TextStyleProps
} from "onno-react"

export type BoxSetProps = BackgroundSetProps &
  BorderSetProps &
  BoxShadowProps &
  ColorSetProps &
  ColorStyleProps &
  DisplaySetProps &
  FlexSetProps &
  GridSetProps &
  LayoutSetProps &
  SpaceSetProps &
  TextSetProps &
  TextStyleProps

export type BoxSetStyle = BackgroundSetStyle &
  BorderSetStyle &
  BoxShadowStyle &
  ColorSetStyle &
  DisplaySetStyle &
  FlexSetStyle &
  GridSetStyle &
  LayoutSetStyle &
  SpaceSetStyle &
  TextSetStyle

export const boxSet = compose<BoxSetProps, BoxSetStyle>({
  name: "box",
  renderers: [
    backgroundSet,
    borderSet,
    boxShadow,
    colorSet,
    colorStyle,
    displaySet,
    flexSet,
    gridSet,
    layoutSet,
    spaceSet,
    textSet,
    textStyle
  ]
})
