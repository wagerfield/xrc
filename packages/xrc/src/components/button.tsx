import { variant, buttonStyle } from "onno-react"
import { createComponent, ComponentProps } from "./factory"
import { uiSet, UISetProps } from "../renderers/ui"
import { VariantProps } from "../types"
import { IconVariant } from "./icon"

export type ButtonSize = "sm" | "md" | "lg"

export type ButtonVariant = "primary" | "secondary" | "alternative"

export type ButtonVariantProps = VariantProps<ButtonVariant>

export interface ButtonProps
  extends ComponentProps,
    ButtonVariantProps,
    UISetProps {
  text?: string
  size?: ButtonSize
  icon?: IconVariant
}

export const buttonVariant = variant<ButtonVariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.button"],
  renderers: [buttonStyle]
})

export const Button = createComponent<ButtonProps>({
  name: "Button",
  renderers: [buttonVariant, uiSet],
  styles: {
    variant: "primary"
  },
  defaultProps: {
    as: "button"
  }
})
