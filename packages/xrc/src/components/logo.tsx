import { omit } from "onno"
import { jsx } from "@emotion/core"
import { PolymorphProps } from "../types/component"
import { graphicSet, GraphicSetProps } from "../renderers/graphic"
import { component } from "./component"

const LOGOS = ["👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"]

export type LogoVariant = 0 | 1 | 2 | 3 | 4 | 5

export type LogoProps = PolymorphProps &
  GraphicSetProps & {
    size?: number | string
    variant?: LogoVariant
    var?: LogoVariant
  }

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

export const Logo = withLogoStyles((props) => {
  const Element = props.as || "div"
  const variant = props.variant || props.var || 0
  const logoProps = omitLogoProps(props)
  logoProps.children = LOGOS[variant]
  return <Element {...logoProps} />
})
