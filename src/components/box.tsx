import { ElementType, FunctionComponent } from "react"
// import { elementType, oneOfType, string } from "prop-types"
import { css, jsx } from "@emotion/core"
import {
  compose,
  propTypes,
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
import { MasterTheme } from "../themes/master"

type BoxSetProps = BackgroundSetProps &
  BorderSetProps &
  BoxShadowProps &
  ColorSetProps &
  ColorStyleProps &
  DisplaySetProps &
  FlexSetProps &
  LayoutSetProps &
  SpaceSetProps &
  TextSetProps &
  TextStyleProps

type BoxSetStyle = BackgroundSetStyle &
  BorderSetStyle &
  BoxShadowStyle &
  ColorSetStyle &
  DisplaySetStyle &
  FlexSetStyle &
  LayoutSetStyle &
  SpaceSetStyle &
  TextSetStyle

export interface BoxProps extends BoxSetProps {
  as: ElementType
}

const boxStyles = css({
  boxSizing: "border-box"
})

const boxSet = compose<BoxSetProps, BoxSetStyle>(
  backgroundSet,
  borderSet,
  boxShadow,
  colorSet,
  colorStyle,
  displaySet,
  flexSet,
  layoutSet,
  spaceSet,
  textSet,
  textStyle
)

export const Box: FunctionComponent<BoxProps> = (props) => (
  <props.as css={[boxStyles, boxSet(props)]} children={props.children} />
)

Box.propTypes = {
  ...propTypes(boxSet)
  // as: oneOfType([elementType, string])
}

Box.defaultProps = {
  theme: MasterTheme,
  as: "div"
}
