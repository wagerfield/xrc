import { InterpolationWithTheme, ObjectInterpolation } from "@emotion/core"
import { AnyRenderFunction, StyleObject, Prop } from "onno"
import { Theme } from "./theme"

export type AnyStyleObject = StyleObject<any>

export type InterpolationObject<P> = ObjectInterpolation<P>

export type InterpolationFunction<P> = (props: P) => InterpolationObject<P>

export type InterpolationWithTheme = InterpolationWithTheme<Theme>

export type Interpolation<P = {}> =
  | InterpolationObject<P>
  | InterpolationFunction<P>

export interface ThemeProps {
  theme?: Theme
}

export interface ComponentProps<P> extends ThemeProps {
  css?: Interpolation<P>
  style?: Interpolation<P>
  forward?: string[]
}

export interface VariantProps<T> extends ThemeProps {
  variant?: Prop<T>
  var?: Prop<T>
}

export interface ComponentOptions<P> {
  name: string
  renderers: AnyRenderFunction[]
  styles?: Interpolation<P>
}

export type OmitKeys = keyof ComponentProps<any>
