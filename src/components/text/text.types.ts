import { ThemeProps } from "../../themes/theme.types"

export interface TextProps extends ThemeProps {
  display?: "block" | "inline-block" | "inline"
  align?: "left" | "center" | "right"
  size?: "regular" | "small"
  italic?: boolean
  bold?: boolean
  reset?: boolean
}
