import { jsx } from "@emotion/core"
import { buttonStyle, omit } from "onno"
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"
import { component, variant, VARIANT_KEYS } from "../core/factory"
import { PolymorphProps, VariantProps } from "../types/component"
import { Icon, IconVariant } from "./icon"
import { withUIStyles } from "./ui"

export type ButtonAttributes = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

type ButtonIndexVariant = 0 | "0" | 1 | "1" | 2 | "2"

export type ButtonSize = "sm" | "md" | "lg" | ButtonIndexVariant

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "alternative"
  | ButtonIndexVariant

export type ButtonVariantProps = VariantProps<ButtonVariant>

export type ButtonStyleProps = ButtonVariantProps

export interface ButtonProps
  extends ButtonAttributes,
    ButtonStyleProps,
    PolymorphProps {
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

const PADDING_MAP = mapSizes([16, 24, 32])

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
    const v = props.variant || props.var || props.v || 0
    const text = props.text || props.children || null
    const icon = props.icon || props.i || null
    let size = props.size || props.s || "lg"
    if (icon && size === "sm") size = "md"
    const isPrimary = v === 0 || v === "primary"
    const isSecondary = v === 1 || v === "secondary"
    const paddingX = text ? PADDING_MAP[size] : 0
    return {
      fontSize: FONT_SIZE_MAP[size],
      borderRadius: RADIUS_MAP[size],
      width: text ? null : SIZE_MAP[size],
      height: SIZE_MAP[size],
      paddingX: paddingX && isSecondary ? paddingX - 2 : paddingX,
      paddingTop: isPrimary ? 0 : 1,
      paddingBottom: 0,
      variant: v
    }
  }
})

const omitButtonProps = omit({
  propsKeys: ["as", "icon", "i", "size", "s", "text", "variant", "var", "v"]
})

const BaseButton = withButtonStyles((props: ButtonProps) => {
  const Element = props.as || "button"
  const buttonProps = omitButtonProps(props)
  const text = props.text || props.children
  const icon = props.icon || props.i
  buttonProps.children = [text]
  if (icon) {
    buttonProps.children.unshift(
      <Icon
        key="icon"
        fill="inherit"
        marginTop={-1}
        marginLeft={text ? -3 : 0}
        marginRight={text ? 2 : 0}
        variant={icon}
      />
    )
  }
  return <Element {...buttonProps} />
})

export const Button = withUIStyles(BaseButton)
