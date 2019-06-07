import React from "react"
import { REPL } from "../components/repl"

export const code = `
<Box variant="main">
  <Heading>👋 Hejsan</Heading>
  <Text>Welcome to the <code>xrc</code> docs. Here you will find everything you need to get up and running.</Text>
  <button>Get started</button>
  <Image display="block" src="http://www.fillmurray.com/200/200" />
</Box>
`

export default () => <REPL code={code} />
