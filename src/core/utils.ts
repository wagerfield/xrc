import { Pred as Predicate } from "ramda"
import { Interpolation } from "styled-components"
import { Theme, ThemeProps } from "../themes/theme.types"

export const styleWhen = <P>(predicate: Predicate, style: Interpolation<P>) => {
  return (props: P) => predicate(props) && style
}

export const theme = <K extends keyof Theme, P extends ThemeProps>(key: K) => {
  return (props: P) => props.theme && props.theme[key]
}
