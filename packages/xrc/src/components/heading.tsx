import { variant } from "onno-react"
import { createComponent, ComponentProps } from "./factory"
import { textSet, TextSetProps } from "../renderers/text"
import { VariantProps } from "../types"
import { test } from "../core/utils"

export type HeadingVariant = "h1" | "h2" | "h3"

export type HeadingVariantProps = VariantProps<HeadingVariant>

export type HeadingProps = ComponentProps & HeadingVariantProps & TextSetProps

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
  defaultProps: {
    as: "h1"
  }
})
