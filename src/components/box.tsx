import { FunctionComponent } from "react"
import { css, jsx } from "@emotion/core"
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
  displaySet,
  DisplaySetProps,
  DisplaySetStyle,
  layoutSet,
  LayoutSetProps,
  LayoutSetStyle,
  spaceSet,
  SpaceSetProps,
  SpaceSetStyle,
  propTypes
} from "onno-react"

export type BoxProps = BackgroundSetProps &
  BorderSetProps &
  BoxShadowProps &
  ColorSetProps &
  DisplaySetProps &
  LayoutSetProps &
  SpaceSetProps

export type BoxStyle = BackgroundSetStyle &
  BorderSetStyle &
  BoxShadowStyle &
  ColorSetStyle &
  DisplaySetStyle &
  LayoutSetStyle &
  SpaceSetStyle

const boxStyles = css({
  boxSizing: "border-box"
})

const boxSet = compose<BoxProps, BoxStyle>(
  backgroundSet,
  borderSet,
  boxShadow,
  colorSet,
  displaySet,
  layoutSet,
  spaceSet
)

export const Box: FunctionComponent<BoxProps> = (props) => (
  <div css={[boxStyles, boxSet(props)]} children={props.children} />
)

Box.propTypes = propTypes(boxSet)
