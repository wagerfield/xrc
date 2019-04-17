import { ThemeProps } from "../../themes/theme.types"

export type ButtonVariant = "primary" | "secondary" | "alternative"

export type ButtonSize = "large" | "small"

export interface ButtonProps extends ThemeProps {
  variant?: ButtonVariant
  size?: ButtonSize
  grow?: boolean
}
