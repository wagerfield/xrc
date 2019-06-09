import { ComponentType, ElementType, FunctionComponent } from "react"
import { interpolate, isType, merge, omit, pick } from "onno"
import { withTheme } from "emotion-theming"
import { jsx } from "@emotion/core"
import {
  OmitKeys,
  ComponentProps,
  PolymorphProps,
  ComponentOptions,
  InterpolationFunction
} from "../types"

const OMIT: OmitKeys[] = ["css", "style", "forward"]

export function component<P>({ name, styles, renderers }: ComponentOptions<P>) {
  const isFunction = isType<InterpolationFunction<P>>("function")
  const transform = interpolate<P, any>({ name, renderers })
  const omitProps = omit<P>({ propsKeys: OMIT, renderers })

  // With styles function
  return (Component: ComponentType<P>) => {
    return withTheme((props: ComponentProps<P>) => {
      const { css, style, theme, forward } = props

      // Render base styles
      const baseStyles = isFunction(styles) ? styles(props as P) : styles

      // // Props filter functions
      const pickProps = pick<P>({ propsKeys: forward })

      // Filter component props
      const componentProps: any = {
        ...omitProps(props as P),
        ...pickProps(props as P),
        style: transform(style as any, theme),
        css: merge([
          transform(baseStyles as any, theme),
          transform.renderer(props as P),
          transform(css as any, theme)
        ])
      }

      // Render component with filtered props
      return <Component {...componentProps} />
    })
  }
}

export function element<P>(Element: ElementType): FunctionComponent<P> {
  return (props) => {
    // console.log(Element, props)
    return <Element {...props} />
  }
}

export function polymorph(
  defaultElement: ElementType
): FunctionComponent<PolymorphProps> {
  return ({ as: Element = defaultElement, ...props }) => {
    // console.log(Element, props)
    return <Element {...props} />
  }
}
