import { Theme as OnnoTheme, ThemeArray, ThemeObject } from "onno-react"

export interface Colors extends ThemeObject {
  brand: {
    primary: string
    secondary: string
  }
}

export interface FontFamilies extends ThemeObject {
  main: string
}

export interface LineHeights extends ThemeObject {
  main: number
  heading: number
  single: 1
}

export interface Borders extends ThemeObject {
  divider: string
  button: string
  input: string
}

export interface Shadows extends ThemeObject {
  drop: ThemeArray
  inset: {
    upper: string
    lower: string
  }
}

export interface TextStyles extends ThemeObject {
  caps: ThemeObject
}

export interface Theme extends OnnoTheme {
  sizes: ThemeArray
  radii: ThemeArray
  colors: Colors
  fontFamilies: FontFamilies
  fontSizes: ThemeArray
  lineHeights: LineHeights
  borders: Borders
  shadows: Shadows
  textStyles: TextStyles
}
