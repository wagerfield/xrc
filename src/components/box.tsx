import { FunctionComponent } from "react"
import { jsx } from "@emotion/core"
import {
  compose,
  colorSet,
  ColorSetProps,
  ColorSetStyle,
  layoutSet,
  LayoutSetProps,
  LayoutSetStyle,
  spaceSet,
  SpaceSetProps,
  SpaceSetStyle
} from "onno"

export type BoxProps = ColorSetProps & LayoutSetProps & SpaceSetProps

export type BoxStyle = ColorSetStyle & LayoutSetStyle & SpaceSetStyle

export const boxSet = compose<BoxProps, BoxStyle>(
  colorSet,
  layoutSet,
  spaceSet
)

export const Box: FunctionComponent = () => <div />

// export const Box = styled.div<BoxProps>(
//   {
//     boxSizing: "border-box"
//   },
//   boxSet
// )
