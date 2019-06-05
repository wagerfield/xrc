import { ThemeObject } from "onno-react"
import { Theme } from "./types"

const buttonStyles = (styles: ThemeObject) => ({
  borderRadius: "lg",
  lineHeight: "single",
  padding: "16px 32px",
  textStyle: "caps",
  border: "none",
  ...styles
})

export const MasterTheme: Theme = {
  colors: {
    brand: {
      primary: "#00B67D",
      secondary: "#FF6A00"
    },
    text: {
      main: "#202020",
      link: "#00B67D",
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
    main: "Avenir Next,system-ui,sans-serif",
    code: "SFMono-Regular,Consolas,Menlo,monospace"
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
    main: {
      background: "fill.main",
      color: "text.main"
    }
  },
  textStyles: {
    main: {
      fontSize: "main",
      fontFamily: "main",
      fontWeight: "normal",
      lineHeight: "main"
    },
    heading: {
      fontFamily: "main",
      fontWeight: "bold",
      lineHeight: "heading"
    },
    caps: {
      fontWeight: "bold",
      textTransform: "uppercase"
    }
  },
  buttonStyles: {
    primary: buttonStyles({
      "color": "text.inv",
      "background": "brand.primary",
      "fontSmoothing": "antialiased",
      "boxShadow": [
        "0 -4px 0 rgba(0,0,0,0.32) inset", // inner
        "0 2px 4px rgba(0,0,0,0.16)" // outer
      ].join(", "),
      ":hover": {
        background: "#08C98D"
      },
      ":active": {
        background: "brand.primary"
      }
    }),
    secondary: buttonStyles({
      background: "transparent",
      border: "button",
      borderColor: "brand.primary",
      color: "brand.primary",
      padding: "14px 30px"
    }),
    alternative: buttonStyles({
      background: "rgba(0,0,0,0.04)",
      color: "brand.primary"
    })
  },
  globalStyles: {
    "html,button": {
      color: "text.main",
      textStyle: "main"
    },
    "h1,h2,h3,p": {
      margin: 0,
      marginBottom: 4
    },
    "h1,h2,h3": {
      textStyle: "heading"
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
    "code": {
      fontSize: "85%",
      fontFamily: "code",
      borderRadius: "4px",
      background: "rgba(32,32,32,0.1)",
      padding: "0.2em 0.4em"
    },
    "b,strong": {
      fontWeight: "bold"
    },
    "a": {
      color: "text.link",
      textDecoration: "none"
    },
    "button": {
      buttonStyle: "primary",
      cursor: "pointer"
    },
    ":focus": {
      outline: "3px solid rgba(0,155,255,0.6)",
      outlineOffset: "3px",
      zIndex: 1
    }
  }
}
