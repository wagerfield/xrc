import { variant } from "onno"
import { HTMLAttributes } from "react"
import { PolymorphProps, VariantProps } from "../types/component"
import { textSet, TextSetProps } from "../renderers/text"
import { component, polymorph } from "./component"
import { test } from "../core/utils"

export type TextAttributes = HTMLAttributes<HTMLElement>

export type TextVariant = "main" | "code" | "caps"

export type TextVariantProps = VariantProps<TextVariant>

export type TextStyleProps = TextVariantProps & TextSetProps

export type TextProps = TextStyleProps & PolymorphProps

export const textVariant = variant<TextVariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.text"],
  renderers: [textSet]
})

const isCode = test(/^code$/)

export const withTextStyles = component<TextProps>({
  name: "Text",
  renderers: [textVariant, textSet],
  styles: (props) => ({
    boxSizing: "border-box",
    variant: isCode(props.as) ? props.as : null
  })
})

export const Text = withTextStyles(polymorph<TextAttributes>("div"))
