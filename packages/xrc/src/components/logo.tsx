import { omit } from "onno"
import { jsx } from "@emotion/core"
import { HTMLAttributes } from "react"
import { PolymorphProps } from "../types/component"
import { graphicSet, GraphicSetProps } from "../renderers/graphic"
import { component } from "./component"

export type LogoAttributes = Omit<HTMLAttributes<HTMLElement>, "color">

export type LogoVariant = 0 | 1 | 2 | 3 | 4 | 5

export type LogoStyleProps = GraphicSetProps

export interface LogoProps
  extends LogoAttributes,
    LogoStyleProps,
    PolymorphProps {
  size?: number | string
  variant?: LogoVariant
  var?: LogoVariant
}

const LOGOS = ["👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"]

export const withLogoStyles = component<LogoProps>({
  name: "Logo",
  renderers: [graphicSet],
  styles({ size }) {
    const iconSize = Number(size) || 32
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
  propsKeys: ["as", "size", "var", "variant"]
})

export const Logo = withLogoStyles((props: LogoProps) => {
  const Element = props.as || "div"
  const variant = props.variant || props.var || 0
  const logoProps = omitLogoProps(props)
  logoProps.children = LOGOS[variant]
  return <Element {...logoProps} />
})
