import { ElementType, FunctionComponent } from "react"
import { jsx } from "@emotion/core"

export interface PolymorphProps {
  as?: ElementType
}

export function createPolymorph(
  defaultElement: ElementType
): FunctionComponent<PolymorphProps> {
  return (props) => {
    const { as: Element = defaultElement, ...rest } = props
    // console.log(Element, rest)
    return <Element {...rest} />
  }
}

export const Polymorph = createPolymorph("div")
