import {
  FontFaceFontDisplayProperty,
  FontFaceFontWeightProperty,
  FontFaceFontStyleProperty
} from "csstype"
import { addRem, isNumber, Style, StyleObject } from "onno"
import { FontSizes, FontSizesObject } from "../types/theme"

export type FontFaceFontFormat = "eot" | "svg" | "ttf" | "woff" | "woff2"

export interface FontFaceOptions {
  path: string
  file: string
  family: string
  formats: FontFaceFontFormat[]
  display?: FontFaceFontDisplayProperty
  weight?: FontFaceFontWeightProperty
  style?: FontFaceFontStyleProperty
}

export interface FontFaceObject extends Style {
  src: string
  fontFamily: string
  fontDisplay?: FontFaceFontDisplayProperty
  fontWeight?: FontFaceFontWeightProperty
  fontStyle?: FontFaceFontStyleProperty
}

export interface FontFaceStyle extends StyleObject<FontFaceObject> {
  "@font-face": FontFaceObject
}

interface FormatMap {
  [key: string]: string | undefined
  eot: "embedded-opentype"
  ttf: "truetype"
}

const FORMAT_MAP: FormatMap = {
  eot: "embedded-opentype",
  ttf: "truetype"
}

export function renderFonts(fonts: FontFaceOptions[]): FontFaceStyle[] {
  return fonts.map((font) => {
    const sources = font.formats.map((ext) => {
      const format = FORMAT_MAP[ext] || ext
      const url = `${font.path}/${font.file}.${ext}`
      return `url('${url}') format('${format}')`
    })
    const fontFace: FontFaceObject = {
      fontFamily: font.family,
      src: sources.join(", ")
    }
    if (font.display) fontFace.fontDisplay = font.display
    if (font.weight) fontFace.fontWeight = font.weight
    if (font.style) fontFace.fontStyle = font.style
    return { "@font-face": fontFace }
  })
}

export function mapFontSizes(
  baseSize: number,
  fontSizes: FontSizesObject<number>
): FontSizes {
  return Object.keys(fontSizes).reduce(
    (acc, key) => {
      const value = fontSizes[key]
      if (isNumber(value)) acc[key] = addRem(value / baseSize)
      return acc
    },
    { base: fontSizes } as FontSizes
  )
}
