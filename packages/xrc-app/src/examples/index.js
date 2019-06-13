import { navigate } from "@reach/router"
import { propEq, exampleToQuery, queryToExample } from "../core/utils"
import Buttons from "./buttons"
import HelloWorld from "./hello-world"
import HomePage from "./home-page"
import Themes from "./themes"

export { Buttons, HelloWorld, HomePage, Themes }

const slugEq = propEq("slug")

export const getExample = (path, defaultExample = HelloWorld) => {
  if (typeof document === "undefined") return defaultExample

  // Parse location query string
  let example = queryToExample(location.search)
  if (example.code) return example

  // Resolve example from last slug
  const match = location.pathname.replace(path, "").match(/[\w-]+$/)
  const result = examples.find(slugEq(match && match[0]))
  example = result ? result.data : defaultExample

  // Redirect to path with example query
  const query = exampleToQuery(example)
  navigate(`${path}?${query}`, { replace: true })
}

export const examples = [
  {
    name: "Buttons",
    slug: "buttons",
    data: Buttons
  },
  {
    name: "Hello World",
    slug: "hello-world",
    data: HelloWorld
  },
  {
    name: "Home Page",
    slug: "home-page",
    data: HomePage
  },
  {
    name: "Themes",
    slug: "themes",
    data: Themes
  }
]
