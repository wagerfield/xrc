import React from "react"
import { Text, Box } from "xrc"
import { Link } from "@reach/router"
import { stringify } from "query-string"
import examples from "../examples"

const Example = ({ key, label, props }) => {
  const path = `/view?${stringify(props)}`
  return <Text key={key} as={Link} to={path} children={label} />
}

export default () => <Box>{examples.map(Example)}</Box>
