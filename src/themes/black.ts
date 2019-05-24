import { MasterTheme } from "./master"
import { Theme } from "./theme"

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
    background: {
      main: "#253238",
      alt: "#12191C",
      inv: "#FFFFFF",
      invAlt: "#455A64"
    },
    feedback: {
      neutral: "#90CAF9",
      positive: "#AED581",
      negative: "#E57373"
    },
    overlay: {
      dark: "rgba(0,0,0,0.6)",
      medium: "rgba(0,0,0,0.3)",
      light: "rgba(0,0,0,0.04)"
    }
  }
}
