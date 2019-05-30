import { ElementType, FunctionComponent } from "react"
import { withTheme } from "emotion-theming"
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

type BoxSetProps = BackgroundSetProps &
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

type BoxSetStyle = BackgroundSetStyle &
  BorderSetStyle &
  BoxShadowStyle &
  ColorSetStyle &
  DisplaySetStyle &
  FlexSetStyle &
  GridSetStyle &
  LayoutSetStyle &
  SpaceSetStyle &
  TextSetStyle

export interface BoxProps extends BoxSetProps {
  as?: ElementType
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
  gridSet,
  layoutSet,
  spaceSet,
  textSet,
  textStyle
)

export const Box: FunctionComponent<BoxProps> = withTheme((props) => (
  <props.as css={[boxStyles, boxSet(props)]} children={props.children} />
))

Box.defaultProps = {
  as: "div"
}
