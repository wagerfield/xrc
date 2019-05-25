import { Theme } from "./types"

const AVENIR_NEXT = "Avenir Next, system-ui, sans-serif"

export const MasterTheme: Theme = {
  sizes: [
    {
      alias: "zero",
      value: 0
    },
    {
      alias: "fill",
      value: "100%"
    },
    {
      alias: "icon",
      value: 24
    },
    {
      alias: "sm",
      value: 32
    },
    {
      alias: "md",
      value: 40
    },
    {
      alias: "lg",
      value: 48
    }
  ],
  radii: [
    {
      alias: "none",
      value: 0
    },
    {
      alias: "sm",
      value: 16
    },
    {
      alias: "md",
      value: 20
    },
    {
      alias: "lg",
      value: 24
    }
  ],
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
    feedback: {
      positive: "#00B67D",
      negative: "#D50000",
      neutral: "#0277BD"
    },
    overlay: {
      dark: "rgba(0,0,0,0.6)",
      medium: "rgba(0,0,0,0.3)",
      light: "rgba(0,0,0,0.04)"
    }
  },
  fontFamilies: {
    main: AVENIR_NEXT
  },
  fontSizes: [
    {
      alias: "sm",
      value: 14
    },
    {
      alias: "main",
      value: 16
    },
    {
      alias: "h3",
      value: 24
    },
    {
      alias: "h2",
      value: 28
    },
    {
      alias: "h1",
      value: 32
    }
  ],
  lineHeights: [
    {
      alias: "single",
      value: 1
    },
    {
      alias: "main",
      value: 1.5
    },
    {
      alias: "heading",
      value: 1.25
    }
  ],
  borders: {
    divider: "1px solid",
    button: "2px solid",
    input: "2px solid"
  },
  boxShadows: {
    drop: ["none", "0 2px 4px rgba(0,0,0,0.16)", "0 2px 16px rgba(0,0,0,0.5)"],
    inset: {
      upper: "0 4px 4px inset",
      lower: "0 -4px 0 inset"
    }
  },
  colorStyles: {
    primary: {
      background: "#00B67D",
      color: "#FFFFFF"
    },
    secondary: {
      background: "#FF6A00",
      color: "#FFFFFF"
    }
  },
  textStyles: {
    caps: {
      fontWeight: "bold",
      textTransform: "uppercase"
    }
  },
  global: {
    "html": {
      fontFamily: AVENIR_NEXT,
      fontSize: "16px",
      lineHeight: 1.5,
      color: "#202020"
    },
    "h1,h2,h3": {
      lineHeight: 1.25
    },
    "h1": {
      fontSize: "32px"
    },
    "h2": {
      fontSize: "28px"
    },
    "h3": {
      fontSize: "24px"
    }
  }
}
