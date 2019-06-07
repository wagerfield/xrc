import { ThemeObject } from "onno-react"
import { Theme } from "../types"

const buttonStyles = (styles: ThemeObject) => ({
  padding: "16px 32px",
  textStyle: "caps",
  lineHeight: "single",
  borderRadius: "lg",
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
    highlight: {
      main: "rgba(32,32,32,0.1)",
      inv: "rgba(255,255,255,0.1)"
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
  // Typography
  fontFamilies: {
    main: "Avenir Next,system-ui,sans-serif",
    code: "SFMono-Regular,Consolas,Menlo,monospace"
  },
  fontWeights: {
    normal: 400,
    bold: 700
  },
  fontSizes: [
    { alias: "xs", value: 12 },
    { alias: "sm", value: 14 },
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
  // Layout
  sizes: [
    { alias: "zero", value: 0 },
    { alias: "fill", value: "100%" },
    { alias: "icon", value: 24 },
    { alias: "xs", value: 16 },
    { alias: "sm", value: 32 },
    { alias: "md", value: 40 },
    { alias: "lg", value: 48 }
  ],
  borderRadii: [
    { alias: "none", value: 0 },
    { alias: "fill", value: "100%" },
    { alias: "icon", value: 12 },
    { alias: "xs", value: 4 },
    { alias: "sm", value: 16 },
    { alias: "md", value: 20 },
    { alias: "lg", value: 24 }
  ],
  // Display
  borders: {
    divider: "1px solid",
    button: "2px solid",
    input: "2px solid"
  },
  outlines: {
    main: "3px solid rgba(64,128,255,0.8)"
  },
  outlineOffsets: {
    main: 0,
    outer: 3,
    inner: -3
  },
  boxShadows: [
    { alias: "sm", value: "0 2px 4px rgba(0,0,0,0.08)" },
    { alias: "lg", value: "0 2px 16px rgba(0,0,0,0.5)" }
  ],
  // Variants
  colorStyles: {
    main: {
      background: "fill.main",
      color: "text.main"
    }
  },
  textStyles: {
    heading: {
      fontFamily: "main",
      fontWeight: "bold",
      lineHeight: "heading"
    },
    main: {
      fontSize: "main",
      fontFamily: "main",
      fontWeight: "normal",
      lineHeight: "main"
    },
    code: {
      fontSize: "85%",
      fontFamily: "code"
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
  // Global
  globalStyles: {
    "html, button": {
      color: "text.main",
      textStyle: "main"
    },
    // Text
    "h1, h2, h3, p": {
      margin: 0,
      marginBottom: 4
    },
    // Headings
    "h1, h2, h3": {
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
    // Code
    "pre": {
      margin: 0
    },
    "code": {
      textStyle: "code",
      borderRadius: "xs",
      background: "highlight.main",
      padding: "0.2em 0.4em"
    },
    // Formatting
    "b, strong": {
      fontWeight: "bold"
    },
    // Links
    "a": {
      color: "text.link",
      textDecoration: "none"
    },
    // Lists
    "ol, ul": {
      listStyle: "disc outer none",
      padding: 0,
      margin: 0
    },
    "ol ol, ul ul": {
      listStyleType: "disc",
      marginLeft: 28
    },
    // Button
    "button": {
      buttonStyle: "primary",
      cursor: "pointer"
    },
    // Pseudo
    "*": {
      outline: "none"
    }
  },
  // Components
  components: {
    box: {
      main: {
        background: "fill.main"
      },
      alt: {
        background: "fill.alt"
      }
    },
    text: {
      main: {
        textStyle: "main"
      },
      code: {
        textStyle: "code"
      }
    },
    heading: {
      h1: {
        fontSize: "h1",
        textStyle: "heading"
      },
      h2: {
        fontSize: "h2",
        textStyle: "heading"
      },
      h3: {
        fontSize: "h3",
        textStyle: "heading"
      }
    },
    button: {
      primary: {
        buttonStyle: "primary"
      },
      secondary: {
        buttonStyle: "secondary"
      },
      alternative: {
        buttonStyle: "alternative"
      }
    }
  }
}
