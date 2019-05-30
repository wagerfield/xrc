import * as React from "react"
// import { Provider, Editor, Error, Preview } from "components/live"
// import { Box } from "xrc"

export const code = `
<Base>
  <h1>👋 Hejsan</h1>
  <p>Welcome to the <code>xrc</code> docs. Here you will find everything you need to get up and running.</p>
  <button>Get started</button>
</Base>
`

// export default () => (
//   <Provider code={code}>
//     <Preview />
//     <Editor />
//     <Error />
//   </Provider>
// )

export default () => (
  <pre>
    <code>{code}</code>
  </pre>
)
