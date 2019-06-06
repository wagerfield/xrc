import { ElementType, FunctionComponent } from "react"
import { jsx, InterpolationWithTheme, ObjectInterpolation } from "@emotion/core"
import { withTheme } from "emotion-theming"
import {
  omit,
  pick,
  isType,
  interpolate,
  ThemeProps,
  AnyRenderFunction
} from "onno-react"
import { Theme } from "../themes/types"

export type Interpolation = InterpolationWithTheme<Theme>

export type InterpolationFunction<P> = (props: P) => Interpolation

export interface ComponentProps extends ThemeProps {
  as?: ElementType
  css?: ObjectInterpolation<any>
  style?: ObjectInterpolation<any>
  forward?: string[]
}

export interface DefaultProps {
  as: ElementType
}

export interface ComponentOptions<P extends ComponentProps> {
  name: string
  renderers: AnyRenderFunction[]
  defaultProps: DefaultProps & Partial<P>
  styles?: Interpolation | InterpolationFunction<P>
}

const propsKeys = ["as", "css", "style", "forward"]

export function createComponent<P extends ComponentProps>({
  name,
  styles,
  renderers,
  defaultProps
}: ComponentOptions<P>): FunctionComponent<P> {
  const sanitize = omit<P>({ propsKeys, renderers })
  const transform = interpolate<P, any>({ name, renderers })
  const isFunction = isType<InterpolationFunction<P>>("function")

  // Create themed component
  const component: FunctionComponent<P> = withTheme((props) => {
    const baseStyles = isFunction(styles) ? styles(props) : styles
    const userStyles = transform(props.css, props.theme)
    const propStyles = transform.renderer(props)

    // Prepare component styles
    const injectedStyles = [baseStyles, propStyles, userStyles]
    const inlineStyles = transform(props.style, props.theme)

    // Prepare component props
    const forward = pick<P>({ propsKeys: props.forward })
    const componentProps = {
      ...sanitize(props),
      ...forward(props),
      css: injectedStyles,
      style: inlineStyles
    }

    // Apply styles and sanitized props
    return <props.as {...componentProps} />
  })

  // Define component properties and return
  Object.defineProperty(component, "name", { value: name })
  component.defaultProps = defaultProps
  return component
}
