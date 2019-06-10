import { jsx } from "@emotion/core"
import { isNumberLike, omit } from "onno"
import { graphicSet, GraphicSetProps } from "../renderers/graphic"
import { component } from "./component"
import ICONS from "./icons.json"

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
}

export const withIconStyles = component<IconProps>({
  name: "Icon",
  renderers: [graphicSet],
  styles: {
    boxSizing: "border-box"
  }
})

const omitIconProps = omit({
  propsKeys: ["scale", "var", "variant"]
})

export const Icon = withIconStyles((props) => {
  const path = ICONS[props.variant || props.var || "bug"]
  const size = isNumberLike(props.scale) ? props.scale! * SIZE : SIZE
  const isPath = path.startsWith("M")
  const Element = isPath ? "path" : "polygon"
  const iconProps = omitIconProps(props)
  const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: `0 0 ${SIZE} ${SIZE}`,
    height: size,
    width: size
  }
  const elementProps = {
    [isPath ? "d" : "points"]: path
  }
  return (
    <svg {...iconProps} {...svgProps}>
      <Element {...elementProps} />
    </svg>
  )
})
