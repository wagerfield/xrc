import {
  backgroundSet,
  BackgroundSetProps,
  borderSet,
  BorderSetProps,
  colorStyle,
  ColorStyleProps,
  displaySet,
  DisplaySetProps,
  flexSet,
  FlexSetProps,
  gridSet,
  GridSetProps,
  globalSet,
  GlobalSetProps,
  layoutSet,
  LayoutSetProps,
  textStyle,
  TextStyleProps
} from "onno-react"
import { createComponent, ComponentProps } from "./factory"

export type BoxProps = ComponentProps &
  BackgroundSetProps &
  BorderSetProps &
  DisplaySetProps &
  LayoutSetProps &
  GlobalSetProps &
  ColorStyleProps &
  TextStyleProps &
  FlexSetProps &
  GridSetProps

export const Box = createComponent<BoxProps>({
  name: "Box",
  styles: {
    boxSizing: "border-box"
  },
  renderers: [
    backgroundSet,
    borderSet,
    displaySet,
    layoutSet,
    globalSet,
    colorStyle,
    textStyle,
    flexSet,
    gridSet
  ],
  defaultProps: {
    as: "div"
  }
})
