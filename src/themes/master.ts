import { Theme } from "./types"

const FF_MAIN = "Avenir Next,system-ui,sans-serif"
const FF_MONO = "SFMono-Regular,Consolas,Menlo,monospace"

export const MasterTheme: Theme = {
  colors: {
    brand: {
      primary: "#00B67D",
      secondary: "#FF6A00"
    },
    text: {
      main: "#202020",
      alt: "#666666",
      inv: "#FFFFFF"
    },
    fill: {
      main: "#F7F4EF",
      alt: "#DDDAD4",
      inv: "#FFFFFF",
      invAlt: "#D8D8D8",
      debug: "rgba(0,153,255,0.25)"
    },
    status: {
      info: "#0277BD",
      success: "#00B67D",
      failure: "#D50000"
    },
    overlay: {
      dark: "rgba(0,0,0,0.6)",
      medium: "rgba(0,0,0,0.3)",
      light: "rgba(0,0,0,0.04)"
    }
  },
  fontFamilies: {
    heading: FF_MAIN,
    main: FF_MAIN,
    code: FF_MONO
  },
  fontWeights: {
    normal: 400,
    bold: 700
  },
  fontSizes: [
    { alias: "small", value: 14 },
    { alias: "main", value: 16 },
    { alias: "h3", value: 24 },
    { alias: "h2", value: 28 },
    { alias: "h1", value: 32 }
  ],
  lineHeights: [
    { alias: "single", value: 1 },
    { alias: "heading", value: 1.25 },
    { alias: "main", value: 1.5 }
  ],
  sizes: [
    { alias: "zero", value: 0 },
    { alias: "fill", value: "100%" },
    { alias: "icon", value: 24 },
    { alias: "sm", value: 32 },
    { alias: "md", value: 40 },
    { alias: "lg", value: 48 }
  ],
  borderRadii: [
    { alias: "none", value: 0 },
    { alias: "fill", value: "100%" },
    { alias: "icon", value: 12 },
    { alias: "sm", value: 16 },
    { alias: "md", value: 20 },
    { alias: "lg", value: 24 }
  ],
  borders: {
    divider: "1px solid",
    button: "2px solid",
    input: "2px solid"
  },
  boxShadows: [{ alias: "main", value: "0 2px 16px rgba(0,0,0,0.5)" }],
  colorStyles: {
    primary: {
      background: "brand.primary",
      color: "text.inv"
    },
    secondary: {
      background: "brand.secondary",
      color: "text.inv"
    }
  },
  textStyles: {
    caps: {
      fontWeight: "bold",
      textTransform: "uppercase"
    }
  },
  globalStyles: {
    "html": {
      fontSize: "main",
      fontFamily: "main",
      lineHeight: "main",
      color: "text.main"
    },
    "body,h1,h2,h3,p": {
      margin: 0
    },
    "h1,h2,h3": {
      fontFamily: "heading",
      lineHeight: "heading"
    },
    "h1": {
      fontSize: "h1"
    },
    "h2": {
      fontSize: "h2"
    },
    "h3": {
      fontSize: "h3"
    },
    "pre,code": {
      fontSize: "85%",
      fontFamily: "code",
      borderRadius: "3px",
      padding: "0.2em 0.4em",
      background: "rgba(32,32,32,0.05)"
    }
  }
}
