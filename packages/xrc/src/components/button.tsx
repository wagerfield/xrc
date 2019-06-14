import { buttonStyle } from "onno"
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"
import { component, polymorph, variant, VARIANT_KEYS } from "../core/factory"
import { PolymorphProps, VariantProps } from "../types/component"
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
  children?: ReactNode
  icon?: IconVariant
  i?: IconVariant
  size?: ButtonSize
  s?: ButtonSize
  text?: string
}

interface SizeMap {
  sm: any
  md: any
  lg: any
  0: any
  1: any
  2: any
}

const SIZES = ["sm", "md", "lg"]

const mapSizes = (sizes: any[]) =>
  SIZES.reduce(
    (acc, key, idx) => {
      // @ts-ignore
      acc[key] = acc[idx] = sizes[idx]
      return acc
    },
    {} as SizeMap
  )

const FONT_SIZE_MAP = mapSizes([14, 14, 16])

const PADDING_MAP = mapSizes([16, 20, 32])

const RADIUS_MAP = mapSizes([16, 20, 24])

const SIZE_MAP = mapSizes([32, 40, 48])

export const buttonVariant = variant<ButtonVariantProps>({
  themeKeys: ["button"],
  renderers: [buttonStyle]
})

export const withButtonStyles = component<ButtonProps>({
  name: "Button",
  renderers: [buttonVariant],
  pickKeys: VARIANT_KEYS.concat("theme"),
  styles(props) {
    const text = props.text || props.children || null
    const icon = props.icon || props.i || null
    let size = props.size || props.s || "lg"
    if (icon && size === "sm") size = "md"
    return {
      borderRadius: RADIUS_MAP[size],
      fontSize: FONT_SIZE_MAP[size],
      paddingX: text ? PADDING_MAP[size] : 0,
      width: text ? null : SIZE_MAP[size],
      height: SIZE_MAP[size],
      variant: "primary"
    }
  }
})

const BaseButton = withButtonStyles(polymorph<ButtonAttributes>("button"))

export const Button = withUIStyles(BaseButton)
