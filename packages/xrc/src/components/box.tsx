import { jsx } from "@emotion/core"
import { variant } from "onno"
import { PolyComponentProps, VariantProps } from "../types"
import { boxSet, BoxSetProps } from "../renderers/box"
import { createComponent } from "../core/component"

export type BoxVariant = "main" | "alt"

export type BoxVariantProps = VariantProps<BoxVariant>

export type BoxProps = PolyComponentProps & BoxVariantProps & BoxSetProps

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
  },
  render(filteredProps, originalProps) {
    const Element = originalProps.as || "div"
    return <Element {...filteredProps} />
  }
})
