import { interpolate, omit } from "onno-react"
import { withTheme } from "emotion-theming"
import { css, jsx, InterpolationWithTheme } from "@emotion/core"
import { ElementType, FunctionComponent } from "react"
import { boxSet, BoxSetProps } from "../core/renderers"
import { Theme } from "../themes/types"

export interface BoxProps extends BoxSetProps {
  css?: InterpolationWithTheme<Theme>
  as?: ElementType
}

const styles = css({
  boxSizing: "border-box"
})

const sanitize = omit({
  propsKeys: ["as", "css"],
  renderers: [boxSet]
})

const render = interpolate({
  name: "box",
  renderers: [boxSet]
})

export const Box: FunctionComponent<BoxProps> = withTheme((props) => (
  <props.as
    css={[styles, boxSet(props), render(props.css, props.theme)]}
    {...sanitize(props)}
  />
))

Box.defaultProps = {
  as: "div"
}
