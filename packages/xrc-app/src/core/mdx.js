import { Code } from "../components/code"
import { Docs } from "../components/docs"
import { Link } from "../components/link"

export const components = {
  // Wrapper
  wrapper: Docs,
  // Elements
  a: Link,
  code: Code,
  pre: ({ children }) => children
}
