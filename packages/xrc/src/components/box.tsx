import { HTMLAttributes } from "react"
import { PolymorphProps, VariantProps } from "../types/component"
import { component, polymorph, variant } from "../core/factory"
import { boxSet, BoxSetProps } from "../renderers/box"

export type BoxAttributes = HTMLAttributes<HTMLElement>

export type BoxVariant = "main" | "alt" | "modal"

export type BoxVariantProps = VariantProps<BoxVariant>

export type BoxStyleProps = BoxVariantProps & BoxSetProps

export type BoxProps = BoxStyleProps & PolymorphProps

export const boxVariant = variant<BoxVariantProps>({
  themeKeys: ["box"],
  renderers: [boxSet]
})

export const withBoxStyles = component<BoxProps>({
  name: "Box",
  renderers: [boxVariant, boxSet],
  styles: {
    boxSizing: "border-box"
  }
})

export const Box = withBoxStyles(polymorph<BoxAttributes>("div"))
