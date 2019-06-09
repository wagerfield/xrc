import { jsx } from "@emotion/core"
import { ComponentProps, VariantProps } from "../types"
import { graphicSet, GraphicSetProps } from "../renderers/graphic"
import { createComponent } from "../core/component"

export interface IconPaths {
  camera: string
  close: string
  edit: string
  left: string
  right: string
}

export type IconVariant = keyof IconPaths

export type IconVariantProps = VariantProps<IconVariant>

export interface IconProps
  extends ComponentProps,
    IconVariantProps,
    GraphicSetProps {
  scale?: number
}

// const ICON_PATHS: IconPaths = {
//   camera: "",
//   close: "",
//   edit: "",
//   left: "",
//   right: ""
// }

export const Icon = createComponent<IconProps>({
  name: "Icon",
  renderers: [graphicSet],
  styles: () => ({
    boxSizing: "border-box"
  }),
  render(filteredProps) {
    return <svg {...filteredProps} />
  }
})
