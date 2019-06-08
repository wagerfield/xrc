import { variant } from "onno-react"
import { createComponent, ComponentProps } from "./factory"
import { boxSet, BoxSetProps } from "../renderers/box"
import { VariantProps } from "../types"

export type BoxProps = ComponentProps & VariantProps & BoxSetProps

export const boxVariant = variant<VariantProps, any>({
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
