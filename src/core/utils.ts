import { Interpolation } from "styled-components"
import { Pred as Predicate } from "ramda"

export const prop = <P>(key: keyof P) => (props: P) => props[key]

export const styleWhen = <P>(predicate: Predicate, style: Interpolation<P>) => {
  return (props: P) => predicate(props) && style
}
