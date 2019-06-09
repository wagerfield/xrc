import { jsx } from "@emotion/core"
import { variant, buttonStyle } from "onno"
import { PolyComponentProps, VariantProps } from "../types"
import { uiSet, UISetProps } from "../renderers/ui"
import { createComponent } from "../core/component"
import { IconVariant } from "./icon"

export type ButtonSize = "sm" | "md" | "lg"

export type ButtonVariant = "primary" | "secondary" | "alternative"

export type ButtonVariantProps = VariantProps<ButtonVariant>

export interface ButtonProps
  extends PolyComponentProps,
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
  styles: () => ({
    variant: "primary"
  }),
  render(filteredProps, originalProps) {
    const Element = originalProps.as || "button"
    return <Element {...filteredProps} />
  }
})
