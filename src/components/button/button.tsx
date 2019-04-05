import * as React from "react"
import { ButtonProps } from "./button.interface"
import { StyledButton } from "./button.styles"

export const Button: React.FunctionComponent<ButtonProps> = (props) => (
  <StyledButton {...props} />
)

Button.defaultProps = {
  appearance: "primary",
  block: false,
  size: "large"
}
