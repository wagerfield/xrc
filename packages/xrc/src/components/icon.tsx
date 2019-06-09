import { jsx } from "@emotion/core"
import { isNumberLike } from "onno"
import { component } from "../core/component"
import { graphicSet, GraphicSetProps } from "../renderers/graphic"
import ICONS from "../core/icons.json"

const SIZE = 24

export interface IconPaths {
  camera: string
  close: string
  right: string
  left: string
  edit: string
  bug: string
}

export type IconVariant = keyof IconPaths

export type IconProps = GraphicSetProps & {
  variant?: IconVariant
  var?: IconVariant
  scale?: number
  fill?: string
}

export const withIconStyles = component<IconProps>({
  name: "Icon",
  renderers: [graphicSet],
  styles: {
    boxSizing: "border-box"
  }
})

export const Icon = withIconStyles((props) => {
  const path = ICONS[props.variant || props.var || "bug"]
  const size = isNumberLike(props.scale) ? props.scale! * SIZE : SIZE
  const isPath = path.startsWith("M")
  const Element = isPath ? "path" : "polygon"
  const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: `0 0 ${SIZE} ${SIZE}`,
    height: size,
    width: size
  }
  const elementProps = {
    [isPath ? "d" : "points"]: path,
    fill: props.fill
  }
  return (
    <svg {...svgProps}>
      <Element {...elementProps} />
    </svg>
  )
})
