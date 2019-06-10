const FONT = {
  family: "Avenir Next",
  formats: ["woff", "woff2"],
  display: "swap"
}

const FONTS = [
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
]

export const fonts = (path) => {
  return FONTS.map((font) => {
    return Object.assign({ path }, font, FONT)
  })
}
