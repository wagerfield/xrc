import { buttonStyle } from "onno"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import { PolymorphProps, VariantProps } from "../types/component"
import { component, polymorph, variant, VARIANT_KEYS } from "../core/factory"
import { withUIStyles } from "./ui"
import { IconVariant } from "./icon"

export type ButtonAttributes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

type ButtonIndexVariant = 0 | "0" | 1 | "1" | 2 | "2"

export type ButtonSize = "sm" | "md" | "lg" | ButtonIndexVariant

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "alternative"
  | ButtonIndexVariant

export type ButtonVariantProps = VariantProps<ButtonVariant>

export type ButtonStyleProps = ButtonVariantProps

export interface ButtonProps extends ButtonStyleProps, PolymorphProps {
  icon?: IconVariant
  i?: IconVariant
  size?: ButtonSize
  s?: ButtonSize
  text?: string
}

export const buttonVariant = variant<ButtonVariantProps>({
  themeKey: "button",
  renderer: buttonStyle
})

export const withButtonStyles = component<ButtonProps>({
  name: "Button",
  renderers: [buttonVariant],
  pickKeys: VARIANT_KEYS.concat("theme"),
  styles: {
    variant: "primary"
  }
})

const BaseButton = withButtonStyles(polymorph<ButtonAttributes>("button"))

export const Button = withUIStyles(BaseButton)
