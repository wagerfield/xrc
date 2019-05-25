import { MasterTheme } from "./master"
import { Theme } from "./types"

export const BlackTheme: Theme = {
  ...MasterTheme,
  colors: {
    brand: {
      primary: "#80CBC4",
      secondary: "#CE93D8"
    },
    text: {
      main: "#ECEFF1",
      alt: "#90A4AE",
      inv: "#12191C"
    },
    fill: {
      main: "#253238",
      alt: "#12191C",
      inv: "#FFFFFF",
      invAlt: "#455A64",
      debug: "rgba(0,153,255,0.25)"
    },
    feedback: {
      positive: "#AED581",
      negative: "#E57373",
      neutral: "#90CAF9"
    },
    overlay: {
      dark: "rgba(0,0,0,0.6)",
      medium: "rgba(0,0,0,0.3)",
      light: "rgba(0,0,0,0.16)"
    }
  },
  colorStyles: {
    primary: {
      background: "#80CBC4",
      color: "#FFFFFF"
    },
    secondary: {
      background: "#CE93D8",
      color: "#FFFFFF"
    }
  }
}
