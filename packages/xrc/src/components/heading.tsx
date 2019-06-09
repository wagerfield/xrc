import { variant } from "onno"
import { VariantProps } from "../types"
import { component } from "../core/component"
import { textSet, TextSetProps } from "../renderers/text"
import { createPolymorph, PolymorphProps } from "./polymorph"
import { test } from "../core/utils"

export type HeadingVariant = "h1" | "h2" | "h3"

export type HeadingVariantProps = VariantProps<HeadingVariant>

export type HeadingProps = PolymorphProps & HeadingVariantProps & TextSetProps

export const headingVariant = variant<HeadingVariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.heading"],
  renderers: [textSet]
})

const isHeading = test(/^h[123]$/)

export const withHeadingStyles = component<HeadingProps>({
  name: "Heading",
  renderers: [headingVariant, textSet],
  styles: (props) => ({
    boxSizing: "border-box",
    variant: isHeading(props.as) ? props.as : "h1"
  })
})

export const Heading = withHeadingStyles(createPolymorph("h1"))
