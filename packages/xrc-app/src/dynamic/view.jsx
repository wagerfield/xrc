import React from "react"
import { Box } from "xrc"
import { parse } from "query-string"
import { Error, Preview, Provider } from "../components/live"

export const View = () => {
  if (!location) return null
  const { code, inline } = parse(location.search)
  return (
    <Provider code={code} inline={inline}>
      <Box className="view" height="1" display="flex" flexDirection="column">
        <Error className="error" flex="0 0 auto" />
        <Preview className="preview" flex="1 0 auto" />
      </Box>
    </Provider>
  )
}
