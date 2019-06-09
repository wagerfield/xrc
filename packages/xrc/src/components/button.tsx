import { buttonStyle, variant } from "onno"
import { PolymorphProps, VariantProps } from "../types"
import { component, polymorph } from "../core/component"
import { uiSet, UISetProps } from "../renderers/ui"
import { IconVariant } from "./icon"

export interface ButtonSizeMap {
  sm: string
  md: string
  lg: string
}

export type ButtonSize = keyof ButtonSizeMap

export type ButtonVariant = "primary" | "secondary" | "alternative"

export type ButtonVariantProps = VariantProps<ButtonVariant>

export type ButtonProps = PolymorphProps &
  ButtonVariantProps &
  UISetProps & {
    text?: string
    size?: ButtonSize
    icon?: IconVariant
  }

const DEFAULT_SIZE: ButtonSize = "lg"

const FONT_SIZE: ButtonSizeMap = {
  sm: "14px",
  md: "14px",
  lg: "16px"
}

const PADDING: ButtonSizeMap = {
  sm: "8px 16px",
  md: "12px 16px",
  lg: "16px 32px"
}

export const buttonVariant = variant<ButtonVariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.button"],
  renderers: [buttonStyle]
})

export const withButtonStyles = component<ButtonProps>({
  name: "Button",
  renderers: [buttonVariant, uiSet],
  styles: (props) => ({
    variant: "primary",
    padding: PADDING[props.size || DEFAULT_SIZE],
    fontSize: FONT_SIZE[props.size || DEFAULT_SIZE]
  })
})

export const Button = withButtonStyles(polymorph("button"))
