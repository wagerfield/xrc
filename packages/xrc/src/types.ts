import {
  Prop,
  Primitive,
  ThemeProps,
  ThemeObject,
  Theme as BaseTheme
} from "onno-react"

export interface VariantProps<T> extends ThemeProps {
  variant?: Prop<T>
  var?: Prop<T>
}

export type Color = string

export interface ColorVariant extends ThemeObject {
  background: Color
  color: Color
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
  fontWeights: {
    normal: number
    bold: number
  }
  fontSizes: [
    { alias: "xs"; value: Primitive },
    { alias: "sm"; value: Primitive },
    { alias: "main"; value: Primitive },
    { alias: "h3"; value: Primitive },
    { alias: "h2"; value: Primitive },
    { alias: "h1"; value: Primitive }
  ]
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
    { alias: "lg"; value: Primitive }
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
  buttonStyles: {
    primary: ThemeObject
    secondary: ThemeObject
    alternative: ThemeObject
  }
  globalStyles: ThemeObject
  components: {
    box: {
      main: ThemeObject
      alt: ThemeObject
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
    button: {
      primary: ThemeObject
      secondary: ThemeObject
      alternative: ThemeObject
    }
  }
}
