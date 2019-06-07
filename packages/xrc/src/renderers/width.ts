import {
  compose,
  width,
  WidthProps,
  WidthStyle,
  minWidth,
  MinWidthProps,
  MinWidthStyle,
  maxWidth,
  MaxWidthProps,
  MaxWidthStyle
} from "onno-react"

export type WidthSetProps = WidthProps & MinWidthProps & MaxWidthProps

export type WidthSetStyle = WidthStyle & MinWidthStyle & MaxWidthStyle

export const widthSet = compose<WidthSetProps, WidthSetStyle>({
  name: "width",
  renderers: [width, minWidth, maxWidth]
})
