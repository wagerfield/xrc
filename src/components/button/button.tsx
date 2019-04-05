import * as React from "react"
import { ButtonProps } from "./button.types"
import { StyledButton } from "./button.styles"

export const Button: React.FunctionComponent<ButtonProps> = (props) => (
  <StyledButton {...props} />
)

Button.defaultProps = {
  variant: "primary",
  size: "large",
  flex: false
}
