import { variant } from "onno"
import { PolymorphProps, VariantProps } from "../types"
import { component, polymorph } from "../core/component"
import { boxSet, BoxSetProps } from "../renderers/box"

export type BoxVariant = "main" | "alt"

export type BoxVariantProps = VariantProps<BoxVariant>

export type BoxProps = PolymorphProps & BoxVariantProps & BoxSetProps

export const boxVariant = variant<BoxVariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.box"],
  renderers: [boxSet]
})

export const withBoxStyles = component<BoxProps>({
  name: "Box",
  renderers: [boxVariant, boxSet],
  styles: {
    boxSizing: "border-box"
  }
})

export const Box = withBoxStyles(polymorph("div"))
