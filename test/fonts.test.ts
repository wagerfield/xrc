import { renderFonts } from "../src/core/fonts"

test("returns an array of font face styles", () => {
  const styles = renderFonts([
    {
      path: "/some/path",
      file: "SomeFont-Bold",
      formats: ["eot", "ttf"],
      family: "Some Font"
    }
  ])
  expect(styles).toMatchSnapshot()
})

test("maps font face options correctly", () => {
  const styles = renderFonts([
    {
      path: "/some/path",
      file: "SomeFont-Bold",
      formats: ["eot", "ttf"],
      family: "Some Font",
      display: "swap",
      weight: "bold"
    },
    {
      path: "/another/path",
      file: "SomeFont-Bold",
      formats: ["svg", "woff", "woff2"],
      family: "Another Font",
      style: "italic",
      weight: 700
    }
  ])
  expect(styles).toMatchSnapshot()
})
