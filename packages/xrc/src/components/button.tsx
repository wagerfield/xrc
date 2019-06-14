import { buttonStyle } from "onno"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import { PolymorphProps, VariantProps } from "../types/component"
import { component, polymorph, variant } from "../core/factory"
import { UISetProps } from "../renderers/ui"
import { IconVariant } from "./icon"

export type ButtonAttributes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export interface ButtonSizeMap {
  sm: string
  md: string
  lg: string
}

export type ButtonSize = 0 | "sm" | 1 | "md" | 2 | "lg"

export type ButtonVariant = 0 | "primary" | 1 | "secondary" | 2 | "alternative"

export type ButtonVariantProps = VariantProps<ButtonVariant>

export type ButtonStyleProps = ButtonVariantProps & UISetProps

export interface ButtonProps extends ButtonStyleProps, PolymorphProps {
  icon?: IconVariant
  i?: IconVariant
  size?: ButtonSize
  s?: ButtonSize
  text?: string
}

// const DEFAULT_SIZE: ButtonSize = "lg"

// const FONT_SIZE: ButtonSizeMap = {
//   sm: "14px",
//   md: "14px",
//   lg: "16px"
// }

// const PADDING: ButtonSizeMap = {
//   sm: "8px 16px",
//   md: "12px 16px",
//   lg: "16px 32px"
// }

export const buttonVariant = variant<ButtonVariantProps>({
  themeKey: "button",
  renderer: buttonStyle
})

export const withButtonStyles = component<ButtonProps>({
  name: "Button",
  renderers: [buttonVariant],
  styles: (props) => ({
    variant: "primary"
    // padding: PADDING[props.size || DEFAULT_SIZE],
    // fontSize: FONT_SIZE[props.size || DEFAULT_SIZE]
  })
})

// withUIStyles

export const Button = withButtonStyles(polymorph<ButtonAttributes>("button"))
