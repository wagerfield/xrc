import styled from "styled-components"
import { prop } from "../../core/utils"
import { FlexProps } from "./flex.types"

const width = (props: FlexProps) => {
  const fill = props.fillArea || props.fillWidth
  return props.width || (fill && "100%")
}

const height = (props: FlexProps) => {
  const fill = props.fillArea || props.fillHeight
  return props.height || (fill && "100%")
}

const overflowX = (props: FlexProps) => {
  return props.overflow || props.overflowX
}

const overflowY = (props: FlexProps) => {
  return props.overflow || props.overflowY
}

export const Flex = styled.div<FlexProps>`
  display: ${prop("display")};

  flex-direction: ${prop("direction")};
  flex-wrap: ${prop("wrap")};

  align-items: ${prop("alignItems")};
  align-content: ${prop("alignContent")};
  justify-content: ${prop("justifyContent")};

  background: ${prop("background")};

  width: ${width};
  height: ${height};

  overflow-x: ${overflowX};
  overflow-y: ${overflowY};
`

Flex.defaultProps = {
  display: "flex",
  direction: "row",
  alignItems: "stretch",
  alignContent: "stretch",
  justifyContent: "flex-start",
  wrap: "nowrap"
}
