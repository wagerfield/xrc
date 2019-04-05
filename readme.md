# XRC

Library of React Components created with [TypeScript][typescript] and [Styled Components][styled-components].

## Usage

```tsx
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Button } from "xrc"

const root = document.getElementById("root")!

ReactDOM.render(<Button>Hello XRC</Button>, root)
```

## Development

1. Clone the repository and `cd` into it
2. Run `yarn` to install the dependencies
3. Run `yarn dev` to start the TypeScript compiler in watch mode

[typescript]: https://www.typescriptlang.org
[styled-components]: https://www.styled-components.com
