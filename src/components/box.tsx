import { css, jsx } from "@emotion/core"
import { withTheme } from "emotion-theming"
import { ElementType, FunctionComponent } from "react"
import { boxSet, BoxSetProps } from "../core/renderers"

export interface BoxProps extends BoxSetProps {
  as?: ElementType
}

const boxStyles = css({
  boxSizing: "border-box"
})

export const Box: FunctionComponent<BoxProps> = withTheme((props) => (
  <props.as css={[boxStyles, boxSet(props)]} children={props.children} />
))

Box.defaultProps = {
  as: "div"
}
