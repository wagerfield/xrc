import React from "react"
import { REPL } from "components/repl"

export const code = `
<Base>
  <h1>👋 Hejsan</h1>
  <p>Welcome to the <code>xrc</code> docs. Here you will find everything you need to get up and running.</p>
  <button>Get started</button>
</Base>
`

export default () => <REPL code={code} />
