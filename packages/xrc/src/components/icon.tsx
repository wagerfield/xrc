import { createComponent, ComponentProps } from "./factory"
import { graphicSet, GraphicSetProps } from "../renderers/graphic"
import { VariantProps } from "../types"

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

const ICON_PATHS: IconPaths = {
  camera: "",
  close: "",
  edit: "",
  left: "",
  right: ""
}

export const Icon = createComponent<IconProps>({
  name: "Icon",
  renderers: [graphicSet],
  defaultProps: {
    as: "svg"
  }
})
