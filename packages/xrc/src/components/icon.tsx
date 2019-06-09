import { VariantProps } from "../types"
import { component, element } from "../core/component"
import { graphicSet, GraphicSetProps } from "../renderers/graphic"

export interface IconPaths {
  camera: string
  close: string
  edit: string
  left: string
  right: string
}

export type IconVariant = keyof IconPaths

export type IconVariantProps = VariantProps<IconVariant>

export type IconProps = IconVariantProps &
  GraphicSetProps & {
    scale?: number
  }

// const ICON_PATHS: IconPaths = {
//   camera: "",
//   close: "",
//   edit: "",
//   left: "",
//   right: ""
// }

export const withIconStyles = component<IconProps>({
  name: "Icon",
  renderers: [graphicSet],
  styles: {
    boxSizing: "border-box"
  }
})

export const Icon = withIconStyles(element("svg"))
