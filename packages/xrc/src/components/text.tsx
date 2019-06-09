import { jsx } from "@emotion/core"
import { variant } from "onno"
import { PolyComponentProps, VariantProps } from "../types"
import { textSet, TextSetProps } from "../renderers/text"
import { createComponent } from "../core/component"
import { test } from "../core/utils"

export type TextVariant = "main" | "code" | "caps"

export type TextVariantProps = VariantProps<TextVariant>

export type TextProps = PolyComponentProps & TextVariantProps & TextSetProps

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
  }),
  render({ filtered, original }) {
    const Element = original.as || "div"
    return <Element {...filtered} />
  }
})
