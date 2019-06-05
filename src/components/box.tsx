import {
  backgroundSet,
  BackgroundSetProps,
  borderSet,
  BorderSetProps,
  boxShadow,
  BoxShadowProps,
  colorSet,
  ColorSetProps,
  displaySet,
  DisplaySetProps,
  flexSet,
  FlexSetProps,
  gridSet,
  GridSetProps,
  layoutSet,
  LayoutSetProps,
  spaceSet,
  SpaceSetProps,
  textSet,
  TextSetProps
} from "onno-react"
import { createComponent, ComponentProps } from "./factory"

export type BoxProps = ComponentProps &
  BackgroundSetProps &
  BorderSetProps &
  BoxShadowProps &
  ColorSetProps &
  DisplaySetProps &
  FlexSetProps &
  GridSetProps &
  LayoutSetProps &
  SpaceSetProps &
  TextSetProps

export const Box = createComponent<BoxProps>({
  name: "Box",
  styles: {
    boxSizing: "border-box"
  },
  renderers: [
    backgroundSet,
    borderSet,
    boxShadow,
    colorSet,
    displaySet,
    flexSet,
    gridSet,
    layoutSet,
    spaceSet,
    textSet
  ]
})
