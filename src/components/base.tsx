import { jsx } from "@emotion/core"
import { ElementType, FunctionComponent } from "react"
import { Theme } from "../themes/types"

export interface BaseProps {
  as: ElementType
  theme?: Theme
}

export const Base: FunctionComponent<BaseProps> = (props) => (
  <props.as css={[]} children={props.children} />
)

Base.defaultProps = {
  as: "div"
}
