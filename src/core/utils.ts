import { prop as rProp, Pred as Predicate } from "ramda"
import { Interpolation } from "styled-components"
import { Theme, ThemeProps } from "../themes/theme.types"

export const styleIfElse = <P>(
  predicate: Predicate,
  styleWhenTrue?: Interpolation<P>,
  styleWhenFalse?: Interpolation<P>
) => (props: P) => (predicate(props) ? styleWhenTrue : styleWhenFalse)

export const styleWhen = <P>(predicate: Predicate, style: Interpolation<P>) =>
  styleIfElse(predicate, style, null)

export const styleUnless = <P>(predicate: Predicate, style: Interpolation<P>) =>
  styleIfElse(predicate, null, style)

export const theme = <K extends keyof Theme, P extends ThemeProps>(key: K) => {
  return (props: P) => props.theme && props.theme[key]
}

export const prop = <P>(key: Extract<keyof P, string>) =>
  rProp(key) as Interpolation<P>
