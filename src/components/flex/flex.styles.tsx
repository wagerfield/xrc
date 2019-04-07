import styled, { InterpolationFunction } from "styled-components"
import { prop } from "../../core/utils"
import { FlexProps } from "./flex.props"

type IF = InterpolationFunction<FlexProps>

const width = (p: FlexProps) => {
  const fill = p.fill || p.fillWidth
  return p.width || (fill && "100%")
}

const height = (p: FlexProps) => {
  const fill = p.fill || p.fillHeight
  return p.height || (fill && "100%")
}

export const StyledDiv = styled.div`
  display: ${prop("display") as IF};

  flex-direction: ${prop("direction") as IF};
  flex-wrap: ${prop("wrap") as IF};

  align-items: ${prop("alignItems") as IF};
  align-content: ${prop("alignContent") as IF};
  justify-content: ${prop("justifyContent") as IF};

  background: ${prop("background") as IF};

  width: ${width};
  height: ${height};
`
