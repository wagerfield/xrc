import { withTheme } from "emotion-theming"
import { FunctionComponent } from "react"
import { interpolate, merge, omit, pick } from "onno"
import {
  OmitKeys,
  CSSProperties,
  AnyStyleObject,
  ComponentProps,
  ComponentOptions,
  ThemedInterpolation
} from "../types"

const OMIT: OmitKeys[] = ["as", "css", "style", "forward"]

export function createComponent<P extends ComponentProps>({
  name,
  render,
  styles,
  renderers,
  defaultProps
}: ComponentOptions<P>): FunctionComponent<P> {
  const transformStyle = interpolate<P, any>({ name, renderers })

  // Create themed component
  const component: FunctionComponent<P> = (props: P) => {
    const { css, style, theme, forward } = props

    // Prepare component styles
    const baseStyles = typeof styles === "function" ? styles(props) : styles
    const inlineStyles = transformStyle(style as AnyStyleObject, theme)
    const injectedStyles = merge([
      transformStyle(baseStyles as AnyStyleObject, theme),
      transformStyle.renderer(props),
      transformStyle(css as AnyStyleObject, theme)
    ])

    // Props filter functions
    const omitProps = omit<P>({ propsKeys: OMIT, renderers })
    const pickProps = pick<P>({ propsKeys: forward })

    // Call render function
    return render({
      original: props,
      filtered: {
        ...omitProps(props),
        ...pickProps(props),
        css: injectedStyles as ThemedInterpolation,
        style: inlineStyles as CSSProperties
      }
    })
  }

  // Define component properties
  component.defaultProps = defaultProps
  component.displayName = name

  // Wrap in themed HOC
  return withTheme(component) as FunctionComponent<P>
}
