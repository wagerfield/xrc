const FILE = "AvenirNext"
const BASE = {
  path: "/fonts",
  family: "Avenir Next",
  formats: ["woff", "woff2"],
  display: "swap"
}

export const fonts = [
  {
    file: `${FILE}-Regular`
  },
  {
    file: `${FILE}-Italic`,
    style: "italic"
  },
  {
    file: `${FILE}-Bold`,
    weight: "bold"
  },
  {
    file: `${FILE}-BoldItalic`,
    style: "italic",
    weight: "bold"
  }
].map((font) => Object.assign(font, BASE))
