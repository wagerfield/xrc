import React from "react"
import { Box } from "xrc"

export const Wrapper = (props) => (
  <Box
    size="1"
    padding="4"
    display="flex"
    overflow="auto"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    {...props}
  />
)
