import * as React from "react"
import { FlexProps } from "./flex.props"
import { StyledDiv } from "./flex.styles"

export const Flex: React.FunctionComponent<FlexProps> = (props) => (
  <StyledDiv {...props} />
)

Flex.defaultProps = {
  display: "flex",
  direction: "row",
  alignItems: "stretch",
  alignContent: "stretch",
  justifyContent: "flex-start",
  wrap: "nowrap"
}
