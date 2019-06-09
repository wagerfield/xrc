import { jsx } from "@emotion/core"
import { variant } from "onno"
import { PolyComponentProps, VariantProps } from "../types"
import { textSet, TextSetProps } from "../renderers/text"
import { createComponent } from "../core/component"
import { test } from "../core/utils"

export type HeadingVariant = "h1" | "h2" | "h3"

export type HeadingVariantProps = VariantProps<HeadingVariant>

export type HeadingProps = PolyComponentProps &
  HeadingVariantProps &
  TextSetProps

export const headingVariant = variant<HeadingVariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.heading"],
  renderers: [textSet]
})

const isHeading = test(/^h[123]$/)

export const Heading = createComponent<HeadingProps>({
  name: "Heading",
  renderers: [headingVariant, textSet],
  styles: (props) => ({
    boxSizing: "border-box",
    variant: isHeading(props.as) ? props.as : "h1"
  }),
  render({ filtered, original }) {
    const Element = original.as || "h1"
    return <Element {...filtered} />
  }
})
