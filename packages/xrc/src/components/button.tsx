import { variant, buttonStyle } from "onno"
import { VariantProps } from "../types"
import { component } from "../core/component"
import { uiSet, UISetProps } from "../renderers/ui"
import { createPolymorph, PolymorphProps } from "./polymorph"
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

export const Button = withButtonStyles(createPolymorph("button"))
