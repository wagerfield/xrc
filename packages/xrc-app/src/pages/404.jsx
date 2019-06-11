import React from "react"
import { Heading } from "xrc"
import { Wrapper } from "../components/wrapper"

export default ({ is404 }) => (
  <Wrapper>
    <Heading>{is404 ? "Page not found" : "Oops!"}</Heading>
  </Wrapper>
)
