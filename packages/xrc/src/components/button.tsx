import { variant, buttonStyle } from "onno"
import { PolymorphProps, VariantProps } from "../types"
import { component, polymorph } from "../core/component"
import { uiSet, UISetProps } from "../renderers/ui"
import { IconVariant } from "./icon"

export type ButtonSize = "sm" | "md" | "lg"

export type ButtonVariant = "primary" | "secondary" | "alternative"

export type ButtonVariantProps = VariantProps<ButtonVariant>

export type ButtonProps = PolymorphProps &
  ButtonVariantProps &
  UISetProps & {
    text?: string
    size?: ButtonSize
    icon?: IconVariant
  }

export const buttonVariant = variant<ButtonVariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.button"],
  renderers: [buttonStyle]
})

export const withButtonStyles = component<ButtonProps>({
  name: "Button",
  renderers: [buttonStyle, uiSet],
  styles: {
    variant: "primary"
  }
})

export const Button = withButtonStyles(polymorph("button"))
