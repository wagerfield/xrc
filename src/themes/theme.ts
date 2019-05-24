import { Theme as BaseTheme, ThemeArray, ThemeObject } from "onno-react"

export interface Theme extends BaseTheme {
  sizes: ThemeArray
  radii: ThemeArray
  colors: {
    brand: {
      primary: string
      secondary: string
    }
    text: {
      main: string
      alt: string
      inv: string
    }
    background: {
      main: string
      alt: string
      inv: string
      invAlt: string
      debug: string
    }
    feedback: {
      neutral: string
      positive: string
      negative: string
    }
    overlay: {
      dark: string
      medium: string
      light: string
    }
  }
  fontFamilies: {
    main: string
  }
  fontSizes: ThemeArray
  lineHeights: {
    main: number
    heading: number
    single: 1
  }
  borders: {
    divider: string
    button: string
    input: string
  }
  shadows: {
    drop: ThemeArray
    inset: {
      upper: string
      lower: string
    }
  }
  textStyles: {
    caps: ThemeObject
  }
}
