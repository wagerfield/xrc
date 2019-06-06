import React from "react"
import { REPL } from "../components/repl"

export const code = `
<Box background="fill.main">
  <h1>👋 Hejsan</h1>
  <p>Welcome to the <code>xrc</code> docs. Here you will find everything you need to get up and running.</p>
  <button>Get started</button>
</Box>
`

export default () => <REPL code={code} />
