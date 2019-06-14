import { jsx } from "@emotion/core"
import { omit, Primitive } from "onno"
import { HTMLAttributes } from "react"
import { PolymorphProps } from "../types/component"
import { graphicSet, GraphicSetProps } from "../renderers/graphic"
import { component } from "../core/factory"

export type LogoAttributes = Omit<HTMLAttributes<HTMLElement>, "color">

type LogoNumberVariant = 0 | 1 | 2 | 3 | 4 | 5

type LogoStringVariant = "0" | "1" | "2" | "3" | "4" | "5"

export type LogoVariant = LogoNumberVariant | LogoStringVariant

export type LogoStyleProps = GraphicSetProps

export interface LogoProps
  extends LogoAttributes,
    LogoStyleProps,
    PolymorphProps {
  size?: Primitive
  s?: Primitive
  variant?: LogoVariant
  var?: LogoVariant
  v?: LogoVariant
}

const LOGOS = ["👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"]

export const withLogoStyles = component<LogoProps>({
  name: "Logo",
  renderers: [graphicSet],
  styles({ size, s }) {
    const iconSize = Number(size || s) || 32
    return {
      width: iconSize,
      height: iconSize,
      fontSize: iconSize,
      fontFamily: "system-ui",
      lineHeight: 1.1,
      textAlign: "center",
      display: "inline-block"
    }
  }
})

const omitLogoProps = omit({
  propsKeys: ["as", "size", "s", "variant", "var", "v"]
})

export const Logo = withLogoStyles((props: LogoProps) => {
  const Element = props.as || "div"
  const variant = props.variant || props.var || props.v || 0
  const logoProps = omitLogoProps(props)
  logoProps.children = LOGOS[variant as number]
  return <Element {...logoProps} />
})
