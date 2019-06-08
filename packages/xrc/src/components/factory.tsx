import { ElementType, FunctionComponent } from "react"
import { withTheme } from "emotion-theming"
import { jsx } from "@emotion/core"
import {
  omit,
  pick,
  merge,
  isType,
  interpolate,
  StyleObject,
  ThemeProps,
  AnyRenderFunction
} from "onno-react"

export type Interpolation = StyleObject<any>

export type InterpolationFunction<P> = (props: P) => Interpolation

export interface ComponentProps extends ThemeProps {
  as?: ElementType
  css?: Interpolation
  style?: Interpolation
  forward?: string[]
}

export interface DefaultProps {
  as: ElementType
}

export interface ComponentOptions<P extends ComponentProps> {
  name: string
  renderers: AnyRenderFunction[]
  defaultProps?: DefaultProps & Partial<P>
  styles?: Interpolation | InterpolationFunction<P>
}

const propsKeys = ["as", "css", "style", "forward"]

export function createComponent<P extends ComponentProps>({
  name,
  styles,
  renderers,
  defaultProps
}: ComponentOptions<P>): FunctionComponent<P> {
  const isFunction = isType<InterpolationFunction<P>>("function")
  const transform = interpolate<P, any>({ name, renderers })
  const sanitize = omit<P>({ propsKeys, renderers })

  // Create themed component
  const component: FunctionComponent<P> = withTheme((props) => {
    const { css, style, theme } = props

    // Resolve base styles
    const baseStyles = isFunction(styles) ? styles(props) : styles

    // Prepare component styles
    const inlineStyles = transform(style, theme)
    const injectedStyles = merge([
      transform(baseStyles, theme),
      transform.renderer(props),
      transform(css, theme)
    ])

    // Prepare component props
    const forward = pick<P>({ propsKeys: props.forward })
    const componentProps = {
      ...sanitize(props),
      ...forward(props),
      css: injectedStyles,
      style: inlineStyles
    }

    // Apply styles and sanitized props
    const Element = props.as || "div"
    return <Element {...componentProps} />
  })

  // Define component properties and return
  Object.defineProperty(component, "name", { value: name })
  component.defaultProps = defaultProps
  return component
}
