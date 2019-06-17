import React from "react"
import { Box } from "xrc"

export const Grid = ({ cols, ...props }) => (
  <Box
    padding="4"
    minHeight="1"
    display="grid"
    alignItems="center"
    alignContent="center"
    justifyItems="center"
    justifyContent="center"
    gridTemplateColumns={`repeat(${cols || 3}, auto)`}
    gridGap="4"
    {...props}
  />
)
