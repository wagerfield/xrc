import { FunctionComponent } from "react"
import { jsx, css } from "@emotion/core"
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
  SpaceSetStyle,
  propTypes
} from "onno-react"

export type BoxProps = ColorSetProps & LayoutSetProps & SpaceSetProps

export type BoxStyle = ColorSetStyle & LayoutSetStyle & SpaceSetStyle

export const boxStyles = css({
  boxSizing: "border-box"
})

export const boxSet = compose<BoxProps, BoxStyle>(
  colorSet,
  layoutSet,
  spaceSet
)

export const Box: FunctionComponent<BoxProps> = (props) => (
  <div css={[boxStyles, boxSet(props)]} />
)

Box.propTypes = propTypes(boxSet)
