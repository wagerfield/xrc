import {
  backgroundSet,
  BackgroundSetProps,
  borderSet,
  BorderSetProps,
  displaySet,
  DisplaySetProps,
  flexSet,
  FlexSetProps,
  gridSet,
  GridSetProps,
  globalSet,
  GlobalSetProps,
  layoutSet,
  LayoutSetProps
} from "onno-react"
import { createComponent, ComponentProps } from "./factory"

export type BoxProps = ComponentProps &
  BackgroundSetProps &
  BorderSetProps &
  DisplaySetProps &
  LayoutSetProps &
  GlobalSetProps &
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
    flexSet,
    gridSet
  ],
  defaultProps: {
    as: "div"
  }
})
