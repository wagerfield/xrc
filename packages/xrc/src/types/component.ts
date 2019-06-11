import { AnyRenderFunction, StyleObject, Prop } from "onno"
import { ElementType } from "react"
import {
  Interpolation as EmotionInterpolation,
  InterpolationWithTheme as EmotionInterpolationWithTheme
} from "@emotion/core"
import { Theme } from "./theme"

export type AnyStyleObject = StyleObject<any>

export type Interpolation<P = {}> = EmotionInterpolation<P>

export type InterpolationWithTheme = EmotionInterpolationWithTheme<Theme>

export interface ThemeProps {
  theme?: Theme
}

export interface PolymorphProps {
  as?: ElementType
}

export interface VariantProps<T> extends ThemeProps {
  variant?: Prop<T>
  var?: Prop<T>
}

export interface ComponentProps<P> extends ThemeProps {
  style?: Interpolation<P>
  css?: Interpolation<P>
  forward?: string[]
}

export interface ComponentOptions<P> {
  name: string
  renderers: AnyRenderFunction[]
  styles?: Interpolation<P>
}

export type ComponentKeys = keyof ComponentProps<{}>
