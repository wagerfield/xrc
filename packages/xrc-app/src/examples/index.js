import Buttons from "./buttons"
import HelloWorld from "./hello-world"
import HomePage from "./home-page"
import Themes from "./themes"

export { Buttons, HelloWorld, HomePage, Themes }

export const examples = [
  {
    name: "Buttons",
    slug: "button",
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

export const mapPaths = (paths) => {
  return paths.reduce((result, path) => {
    examples.forEach((example) => {
      result.push(`${path}/${example.slug}`)
    })
    return result
  }, [])
}
