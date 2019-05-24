import { Theme } from "./theme"

const AVENIR_NEXT = "Avenir Next, system-ui, sans-serif"

export const MasterTheme: Theme = {
  sizes: [0, "100%", 24, 32, 40, 48],
  radii: [0, 16, 20, 24],
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
    background: {
      main: "#F7F4EF",
      alt: "#DDDAD4",
      inv: "#FFFFFF",
      invAlt: "#D8D8D8",
      debug: "rgba(0,153,255,0.25)"
    },
    feedback: {
      neutral: "#0277BD",
      positive: "#00B67D",
      negative: "#D50000"
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
      alias: "small",
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
  lineHeights: {
    main: 1.5,
    heading: 1.25,
    single: 1
  },
  borders: {
    divider: "1px solid",
    button: "2px solid",
    input: "2px solid"
  },
  shadows: {
    drop: ["none", "0 2px 4px rgba(0,0,0,0.16)", "0 2px 16px rgba(0,0,0,0.5)"],
    inset: {
      upper: "0 4px 4px inset",
      lower: "0 -4px 0 inset"
    }
  },
  textStyles: {
    caps: {
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
