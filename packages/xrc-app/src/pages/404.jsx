import React from "react"
import { Heading } from "xrc"
import { Wrapper } from "../components/wrapper"

export default ({ is404 }) => {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    setReady(true)
  }, [])

  return ready ? (
    <Wrapper>
      <Heading>{is404 ? "Page not found" : "Oops!"}</Heading>
    </Wrapper>
  ) : null
}
