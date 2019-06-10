import React from "react"
import { Box, Heading } from "xrc"

export default ({ is404 }) => (
  <Box
    height="1"
    padding="4"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Heading>{is404 ? "Page not found" : "Oops!"}</Heading>
  </Box>
)
