import { variant } from "onno-react"
import { createComponent, ComponentProps } from "./factory"
import { textSet, TextSetProps } from "../renderers/text"
import { VariantProps } from "../types"
import { test } from "../core/utils"

export type TextVariant = "main" | "code" | "caps"

export type TextVariantProps = VariantProps<TextVariant>

export type TextProps = ComponentProps & TextVariantProps & TextSetProps

export const textVariant = variant<TextVariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.text"],
  renderers: [textSet]
})

const isCode = test(/^code$/)

export const Text = createComponent<TextProps>({
  name: "Text",
  renderers: [textVariant, textSet],
  styles: (props) => ({
    boxSizing: "border-box",
    variant: isCode(props.as) ? props.as : null
  })
})
