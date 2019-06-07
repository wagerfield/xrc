import {
  compose,
  display,
  DisplayProps,
  DisplayStyle,
  opacity,
  OpacityProps,
  OpacityStyle,
  visibility,
  VisibilityProps,
  VisibilityStyle
} from "onno-react"

export type DisplaySetProps = DisplayProps & OpacityProps & VisibilityProps

export type DisplaySetStyle = DisplayStyle & OpacityStyle & VisibilityStyle

export const displaySet = compose<DisplaySetProps, DisplaySetStyle>({
  name: "display",
  renderers: [display, opacity, visibility]
})
