import { variant } from "onno"
import { VariantProps } from "../types"
import { component } from "../core/component"
import { textSet, TextSetProps } from "../renderers/text"
import { Polymorph, PolymorphProps } from "./polymorph"
import { test } from "../core/utils"

export type TextVariant = "main" | "code" | "caps"

export type TextVariantProps = VariantProps<TextVariant>

export type TextProps = PolymorphProps & TextVariantProps & TextSetProps

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

export const Text = withTextStyles(Polymorph)
