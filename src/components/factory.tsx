import { ElementType, FunctionComponent } from "react"
import {
  omit,
  interpolate,
  isType,
  ThemeProps,
  AnyRenderFunction
} from "onno-react"
import { jsx, InterpolationWithTheme } from "@emotion/core"
import { withTheme } from "emotion-theming"
import { Theme } from "../themes/types"

export type Interpolation = InterpolationWithTheme<Theme>

export type InterpolationFunction<P> = (props: P) => Interpolation

export interface ComponentProps extends ThemeProps {
  css?: Interpolation
  as?: ElementType
}

export interface ComponentOptions<P extends ComponentProps> {
  name: string
  renderers: AnyRenderFunction[]
  styles?: Interpolation | InterpolationFunction<P>
  defaultProps?: Partial<P>
}

const propsKeys = ["as", "css"]

const isFunction = isType<InterpolationFunction<any>>("function")

export function createComponent<P extends ComponentProps>({
  name,
  styles,
  renderers,
  defaultProps
}: ComponentOptions<P>): FunctionComponent<P> {
  const sanitize = omit({ propsKeys, renderers })
  const transform = interpolate({ name, renderers })
  const component: FunctionComponent<P> = withTheme((props) => {
    const baseStyles = isFunction(styles) ? styles(props) : styles
    const propStyles = transform(props, props.theme)
    const userStyles = transform(props.css, props.theme)
    const styleArray = [baseStyles, propStyles, userStyles]
    return <props.as css={styleArray} {...sanitize(props)} />
  })
  component.defaultProps = defaultProps
  return component
}
