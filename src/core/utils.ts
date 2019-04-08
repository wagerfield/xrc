import { Interpolation } from "styled-components"
import { Pred as Predicate } from "ramda"

export const styleWhen = <P>(predicate: Predicate, style: Interpolation<P>) => {
  return (props: P) => predicate(props) && style
}
