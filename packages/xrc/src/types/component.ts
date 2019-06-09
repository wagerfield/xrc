import { Properties as CSSProperties } from "csstype"
import { ElementType, FunctionComponent } from "react"
import { InterpolationWithTheme, ObjectInterpolation } from "@emotion/core"
import { AnyRenderFunction, Prop, ThemeProps, StyleObject } from "onno"
import { Theme } from "./theme"

export { CSSProperties }

export type AnyStyleObject = StyleObject<any>

export type Interpolation<P = {}> = ObjectInterpolation<P>

export type InterpolationFunction<P> = (props: P) => Interpolation<P>

export type ThemedInterpolation = InterpolationWithTheme<Theme>

export interface StyleProps {
  css: Interpolation
  style: Interpolation
}

export interface ComponentProps extends ThemeProps, Partial<StyleProps> {
  forward?: string[]
}

export interface PolyComponentProps extends ComponentProps {
  as?: ElementType
}

export interface VariantProps<T> extends ThemeProps {
  variant?: Prop<T>
  var?: Prop<T>
}

export type OmitKeys = keyof PolyComponentProps

export interface RenderProps<P> {
  original: P
  filtered: {
    css: ThemedInterpolation
    style: CSSProperties
  }
}

export interface ComponentOptions<P extends ComponentProps> {
  name: string
  renderers: AnyRenderFunction[]
  render: FunctionComponent<RenderProps<P>>
  styles?: Interpolation<P> | InterpolationFunction<P>
  defaultProps?: Partial<P>
}
