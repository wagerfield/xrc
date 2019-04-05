export type ButtonVariant = "primary" | "secondary" | "alternative"

export type ButtonSize = "large" | "small"

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  flex?: Boolean
}
