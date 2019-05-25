import { Theme as BaseTheme, ThemeArray, ThemeObject } from "onno-react"

export interface ColorVariant extends ThemeObject {
  background: string
  color: string
}

export interface Theme extends BaseTheme {
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
    fill: {
      main: string
      alt: string
      inv: string
      invAlt: string
      debug: string
    }
    feedback: {
      positive: string
      negative: string
      neutral: string
    }
    overlay: {
      dark: string
      medium: string
      light: string
    }
  }
  fontFamilies: {
    main: string
    code: string
  }
  fontSizes: ThemeArray
  lineHeights: ThemeArray
  sizes: ThemeArray
  radii: ThemeArray
  borders: {
    divider: string
    button: string
    input: string
  }
  boxShadows: {
    outer: ThemeArray
    inner: ThemeArray
  }
  colorStyles: {
    primary: ColorVariant
    secondary: ColorVariant
  }
  textStyles: {
    caps: ThemeObject
  }
  globalStyles: ThemeObject
}
