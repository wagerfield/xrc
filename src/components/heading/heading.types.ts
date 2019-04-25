import { ThemeProps } from "../../themes/theme.types"

export interface HeadingProps extends ThemeProps {
  align?: "left" | "center" | "right"
  as?: "h1" | "h2" | "h3"
}
