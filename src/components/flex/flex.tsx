import styled from "styled-components"
import { mergeRight, prop } from "ramda"
import { FlexProps } from "./flex.types"

const defaultProps: FlexProps = {
  display: "flex",
  direction: "row",
  alignItems: "stretch",
  alignContent: "stretch",
  justifyContent: "flex-start",
  wrap: "nowrap"
}

const width = (props: FlexProps) => {
  const fill = props.fillArea || props.fillWidth
  return props.width || (fill && "100%")
}

const height = (props: FlexProps) => {
  const fill = props.fillArea || props.fillHeight
  return props.height || (fill && "100%")
}

export const Flex = styled.div.attrs(mergeRight(defaultProps))`
  display: ${prop("display")};

  flex-direction: ${prop("direction")};
  flex-wrap: ${prop("wrap")};

  align-items: ${prop("alignItems")};
  align-content: ${prop("alignContent")};
  justify-content: ${prop("justifyContent")};

  background: ${prop("background")};

  width: ${width};
  height: ${height};
`
