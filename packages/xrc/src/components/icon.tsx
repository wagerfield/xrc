import { jsx } from "@emotion/core"
import { HTMLAttributes } from "react"
import { isNumber, omit, Primitive } from "onno"
import { graphicSet, GraphicSetProps } from "../renderers/graphic"
import { component } from "../core/factory"
import ICONS from "./icons.json"

export type IconAttributes = Omit<HTMLAttributes<HTMLElement>, "color">

export interface IconPaths {
  bug: string
  camera: string
  close: string
  edit: string
  eye: string
  left: string
  right: string
}

export type IconVariant = keyof IconPaths

export type IconStyleProps = GraphicSetProps

export interface IconProps extends IconStyleProps, IconAttributes {
  scale?: Primitive
  s?: Primitive
  variant?: IconVariant
  var?: IconVariant
  v?: IconVariant
}

const SIZE = 24

export const withIconStyles = component<IconProps>({
  name: "Icon",
  renderers: [graphicSet],
  styles: {
    boxSizing: "border-box"
  }
})

const omitIconProps = omit({
  propsKeys: ["scale", "s", "variant", "var", "v"]
})

export const Icon = withIconStyles((props: IconProps) => {
  const scale = Number(props.scale || props.s)
  const path = ICONS[props.variant || props.var || props.v || "bug"]
  const size = isNumber(scale) ? scale * SIZE : SIZE
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
