export const fonts = [
  {
    file: "AvenirNext-Regular",
    weight: 400
  },
  {
    file: "AvenirNext-Italic",
    style: "italic",
    weight: 400
  },
  {
    file: "AvenirNext-Bold",
    weight: 700
  },
  {
    file: "AvenirNext-BoldItalic",
    style: "italic",
    weight: 700
  }
].map((font) => ({
  ...font,
  path: "/fonts",
  family: "Avenir Next",
  formats: ["woff", "woff2"],
  display: "swap"
}))
