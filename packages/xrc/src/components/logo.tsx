import { PolymorphProps, VariantProps } from "../types"
import { component, polymorph } from "../core/component"
import { graphicSet, GraphicSetProps } from "../renderers/graphic"

export type LogoVariant = "a" | "b" | "c"

export type LogoVariantProps = VariantProps<LogoVariant>

export type LogoProps = PolymorphProps &
  LogoVariantProps &
  GraphicSetProps & {
    scale?: number
  }

export const withLogoStyles = component<LogoProps>({
  name: "Logo",
  renderers: [graphicSet],
  styles: {
    boxSizing: "border-box"
  }
})

export const Logo = withLogoStyles(polymorph("div"))
