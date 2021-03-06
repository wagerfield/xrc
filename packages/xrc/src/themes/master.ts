import { ThemeObject } from "onno"
import { Theme } from "../types/theme"
import { mapFontSizes } from "../core/fonts"

const buttonStyles = (styles: ThemeObject) => ({
  alignItems: "center",
  border: "none",
  boxShadow: "none",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-flex",
  fontSmoothing: "antialiased",
  justifyContent: "center",
  lineHeight: "single",
  textStyle: "caps",
  userSelect: "none",
  verticalAlign: "bottom",
  ...styles
})

export const MasterTheme: Theme = {
  colors: {
    brand: [
      { alias: "primary", value: "#00B67D" },
      { alias: "secondary", value: "#FF6A00" }
    ],
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
      dark: "rgba(32,32,32,0.64)",
      medium: "rgba(32,32,32,0.32)",
      light: "rgba(32,32,32,0.08)"
    }
  },
  // Typography
  fontFamilies: {
    main: "Avenir Next,system-ui,sans-serif",
    code: "SFMono-Regular,Consolas,Menlo,monospace"
  },
  fontSizes: mapFontSizes(16, {
    xs: 12,
    sm: 14,
    md: 16, // Alias for "main"
    main: 16, // Main font size
    h3: 24,
    h2: 28,
    h1: 32
  }),
  fontWeights: {
    normal: 400,
    bold: 700
  },
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
    { alias: "lg", value: 48 },
    { alias: "xl", value: 64 }
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
      fontFamily: "main",
      fontWeight: "normal",
      lineHeight: "main"
    },
    code: {
      fontFamily: "code"
    },
    caps: {
      fontWeight: "bold",
      textTransform: "uppercase"
    }
  },
  buttonStyles: [
    {
      alias: "primary",
      value: buttonStyles({
        "fill": "text.inv",
        "color": "text.inv",
        "background": "brand.primary",
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
      })
    },
    {
      alias: "secondary",
      value: buttonStyles({
        "background": "transparent",
        "border": "button",
        "borderColor": "brand.primary",
        "color": "brand.primary",
        "fill": "brand.primary",
        ":hover": {
          background: "rgba(0,182,125,0.12)"
        },
        ":active": {
          background: "transparent"
        }
      })
    },
    {
      alias: "alternative",
      value: buttonStyles({
        "background": "overlay.light",
        "color": "brand.primary",
        "fill": "brand.primary",
        ":hover": {
          background: "rgba(0,0,0,0.12)"
        },
        ":active": {
          background: "overlay.light"
        }
      })
    }
  ],
  // Global
  globalStyles: {
    "*": {
      outline: "none",
      WebkitTapHighlightColor: "rgba(0,0,0,0)"
    },
    // Text
    "html,button": {
      color: "text.main",
      fontSize: "base.main",
      textStyle: "main"
    },
    "@media(min-width:360px)": {
      "html,button": {
        fontSize: "18px"
      }
    },
    "@media(min-width:720px)": {
      "html,button": {
        fontSize: "20px"
      }
    },
    "h1,h2,h3,h4,h5,h6,p": {
      margin: 0,
      marginBottom: "1rem"
    },
    // Headings
    "h1,h2,h3,h4,h5,h6": {
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
    "pre,code": {
      textStyle: "code",
      margin: 0
    },
    "code": {
      fontSize: "85%",
      borderRadius: "xs",
      background: "overlay.light",
      padding: "0.2em 0.4em"
    },
    // Formatting
    "b,strong": {
      fontWeight: "bold"
    },
    "blockquote": {
      margin: "1rem 0"
    },
    // Links
    "a": {
      color: "text.link",
      textDecoration: "none"
    },
    // Lists
    "ol,ul": {
      listStyle: "disc inside none",
      padding: 0,
      margin: 0
    },
    "ol ol,ul ul": {
      listStyleType: "disc",
      marginLeft: "1.5rem"
    },
    // Button
    "button": {
      buttonStyle: "primary",
      borderRadius: "lg",
      fontSize: "base.md",
      height: "lg",
      paddingX: "32px"
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
      },
      modal: {
        background: "fill.main",
        borderRadius: "lg",
        boxShadow: "lg"
      }
    },
    text: {
      main: {
        textStyle: "main"
      },
      code: {
        textStyle: "code"
      },
      caps: {
        textStyle: "caps"
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
    button: [
      {
        alias: "primary",
        value: {
          buttonStyle: "primary"
        }
      },
      {
        alias: "secondary",
        value: {
          buttonStyle: "secondary"
        }
      },
      {
        alias: "alternative",
        value: {
          buttonStyle: "alternative"
        }
      }
    ]
  }
}
