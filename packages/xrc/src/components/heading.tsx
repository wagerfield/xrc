import { HTMLAttributes } from "react"
import { PolymorphProps, VariantProps } from "../types/component"
import { component, polymorph, variant } from "../core/factory"
import { textSet, TextSetProps } from "../renderers/text"
import { test } from "../core/utils"

export type HeadingAttributes = HTMLAttributes<HTMLElement>

export type HeadingVariant = "h1" | "h2" | "h3"

export type HeadingVariantProps = VariantProps<HeadingVariant>

export type HeadingStyleProps = HeadingVariantProps & TextSetProps

export type HeadingProps = HeadingStyleProps & PolymorphProps

export const headingVariant = variant<HeadingVariantProps>({
  themeKeys: ["heading"],
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

export const Heading = withHeadingStyles(polymorph<HeadingAttributes>("h1"))
