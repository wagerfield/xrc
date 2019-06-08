import { variant, buttonStyle } from "onno-react"
import { createComponent, ComponentProps } from "./factory"
import { uiSet, UISetProps } from "../renderers/ui"
import { VariantProps } from "../types"

export type ButtonProps = ComponentProps & VariantProps & UISetProps

export const buttonVariant = variant<VariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.button"],
  renderers: [buttonStyle]
})

export const Button = createComponent<ButtonProps>({
  name: "Button",
  renderers: [buttonVariant, uiSet],
  defaultProps: {
    as: "button",
    variant: "primary"
  }
})
