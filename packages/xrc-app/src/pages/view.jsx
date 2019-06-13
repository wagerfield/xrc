import React, { useEffect } from "react"
import { Box } from "xrc"
import { HelloWorld } from "../examples"
import { Error, Preview, Provider } from "../components/live"
import { parseExample } from "../core/utils"

export default () => {
  let { code } = HelloWorld
  useEffect(() => {
    const example = parseExample(location.search)
    if (example.code) code = example.code
  })
  return (
    <Provider code={code}>
      <Box className="view" height="1" display="flex" flexDirection="column">
        <Error className="error" flex="0 0 auto" />
        <Preview className="preview" flex="1 0 auto" />
      </Box>
    </Provider>
  )
}
