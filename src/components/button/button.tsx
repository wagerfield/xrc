import * as React from "react"
import { ButtonProps } from "./button.props"
import { StyledButton } from "./button.styles"

export const Button: React.FunctionComponent<ButtonProps> = (props) => (
  <StyledButton {...props} />
)

Button.defaultProps = {
  variant: "primary",
  size: "large"
}
