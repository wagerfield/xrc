import HelloWorld from "./hello-world"
import HomePage from "./home-page"
import Themes from "./themes"

export { HelloWorld, HomePage, Themes }

export default [
  {
    key: "hello-world",
    label: "Hello World",
    props: HelloWorld
  },
  {
    key: "home-page",
    label: "Home Page",
    props: HomePage
  },
  {
    key: "themes",
    label: "Themes",
    props: Themes
  }
]
