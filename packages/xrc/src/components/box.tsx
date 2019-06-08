import { variant } from "onno-react"
import { createComponent, ComponentProps } from "./factory"
import { boxSet, BoxSetProps } from "../renderers/box"
import { VariantProps } from "../types"

export type BoxVariant = "main" | "alt"

export type BoxVariantProps = VariantProps<BoxVariant>

export type BoxProps = ComponentProps & BoxVariantProps & BoxSetProps

export const boxVariant = variant<BoxVariantProps, any>({
  propsKeys: ["variant", "var"],
  themeKeys: ["components.box"],
  renderers: [boxSet]
})

export const Box = createComponent<BoxProps>({
  name: "Box",
  renderers: [boxVariant, boxSet],
  styles: {
    boxSizing: "border-box"
  }
})
