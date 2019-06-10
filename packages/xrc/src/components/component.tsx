import { interpolate, isType, omit, pick } from "onno"
import { withTheme } from "emotion-theming"
import { jsx } from "@emotion/core"
import {
  ElementType,
  ComponentType,
  HTMLAttributes,
  FunctionComponent
} from "react"
import {
  OmitKeys,
  ComponentProps,
  PolymorphProps,
  ComponentOptions,
  InterpolationFunction
} from "../types"

const OMIT: OmitKeys[] = ["css", "style", "forward"]

const omitPolymorphProps = omit({ propsKeys: ["as"] })

export function component<P>({ name, styles, renderers }: ComponentOptions<P>) {
  const isFunction = isType<InterpolationFunction<P>>("function")
  const transform = interpolate<P, any>({ name, renderers })
  const omitProps = omit<P>({ propsKeys: OMIT, renderers })

  // With styles function
  return (Component: ComponentType<P & HTMLAttributes<Element>>) => {
    return withTheme((props: ComponentProps<P>) => {
      const { css, style, theme, forward } = props

      // Call base styles with props
      const baseStyles = isFunction(styles) ? styles(props as P) : styles

      // Props filter functions
      const pickProps = pick<P>({ propsKeys: forward })

      // Prepare component props
      const componentProps: any = {
        ...omitProps(props as P),
        ...pickProps(props as P),
        css: [
          transform(baseStyles as any, theme), // Options styles
          transform.renderer(props as P), // Props styles
          transform(css as any, theme) // CSS styles
        ]
      }

      // Transform style prop
      if (style) componentProps.style = transform(style as any, theme)

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
  return (props) => {
    const Element = props.as || defaultElement
    // console.log(Element, props)
    return <Element {...omitPolymorphProps(props)} />
  }
}
