import { variant } from "onno-react"
import { createComponent, ComponentProps } from "./factory"
import { textSet, TextSetProps } from "../renderers/text"
import { VariantProps } from "../types"
import { test } from "../core/utils"

export type TextProps = ComponentProps & VariantProps & TextSetProps

export const textVariant = variant<VariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.text"],
  renderers: [textSet]
})

const isCode = test(/^code$/)

export const Text = createComponent<TextProps>({
  name: "Text",
  styles: (props) => ({
    boxSizing: "border-box",
    variant: isCode(props.as) ? props.as : null
  }),
  renderers: [textVariant, textSet],
  defaultProps: {
    as: "div"
  }
})
