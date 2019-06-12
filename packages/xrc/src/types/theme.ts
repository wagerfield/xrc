import { Primitive, AliasObject, ThemeObject, Theme as BaseTheme } from "onno"

export type ButtonVariants = [
  { alias: "primary"; value: AliasObject<Primitive> },
  { alias: "secondary"; value: AliasObject<Primitive> },
  { alias: "alternative"; value: AliasObject<Primitive> }
]

export type Color = string

export interface ColorVariant extends ThemeObject {
  background: Color
  color: Color
}

export interface FontSizesObject<T extends Primitive> extends ThemeObject {
  xs: T
  sm: T
  md: T
  main: T
  h3: T
  h2: T
  h1: T
}

export type FontSizes = FontSizesObject<string> & {
  base: FontSizesObject<number>
}

export interface Theme extends BaseTheme {
  colors: {
    brand: {
      primary: Color
      secondary: Color
    }
    text: {
      main: Color
      link: Color
      alt: Color
      inv: Color
    }
    fill: {
      main: Color
      alt: Color
      inv: Color
      invAlt: Color
      debug: Color
    }
    status: {
      info: Color
      success: Color
      failure: Color
    }
    overlay: {
      dark: Color
      medium: Color
      light: Color
    }
  }
  fontFamilies: {
    main: string
    code: string
  }
  fontSizes: FontSizes
  fontWeights: {
    normal: number
    bold: number
  }
  lineHeights: [
    { alias: "single"; value: 1 },
    { alias: "heading"; value: Primitive },
    { alias: "main"; value: Primitive }
  ]
  sizes: [
    { alias: "zero"; value: 0 },
    { alias: "fill"; value: "100%" },
    { alias: "icon"; value: Primitive },
    { alias: "xs"; value: Primitive },
    { alias: "sm"; value: Primitive },
    { alias: "md"; value: Primitive },
    { alias: "lg"; value: Primitive },
    { alias: "xl"; value: Primitive }
  ]
  borderRadii: [
    { alias: "none"; value: 0 },
    { alias: "fill"; value: "100%" },
    { alias: "icon"; value: Primitive },
    { alias: "xs"; value: Primitive },
    { alias: "sm"; value: Primitive },
    { alias: "md"; value: Primitive },
    { alias: "lg"; value: Primitive }
  ]
  borders: {
    divider: string
    button: string
    input: string
  }
  outlines: {
    main: string
  }
  outlineOffsets: {
    main: number
    outer: number
    inner: number
  }
  // prettier-ignore
  boxShadows: [
    { alias: "sm"; value: string },
    { alias: "lg"; value: string }
  ]
  colorStyles: {
    main: ColorVariant
  }
  textStyles: {
    heading: ThemeObject
    main: ThemeObject
    code: ThemeObject
    caps: ThemeObject
  }
  buttonStyles: ButtonVariants
  globalStyles: ThemeObject
  components: {
    box: {
      main: ThemeObject
      alt: ThemeObject
      modal: ThemeObject
    }
    text: {
      main: ThemeObject
      code: ThemeObject
      caps: ThemeObject
    }
    heading: {
      h1: ThemeObject
      h2: ThemeObject
      h3: ThemeObject
    }
    button: ButtonVariants
  }
}
