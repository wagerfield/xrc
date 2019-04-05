export type ButtonAppearance = "primary" | "secondary" | "alternative"

export type ButtonSize = "large" | "small"

export interface ButtonProps {
  appearance?: ButtonAppearance
  block?: Boolean
  size?: ButtonSize
}
