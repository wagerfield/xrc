import { MasterTheme } from "./master"
import { Theme } from "../types"

export const BlackTheme: Theme = {
  ...MasterTheme,
  colors: {
    brand: {
      primary: "#80CBC4",
      secondary: "#CE93D8"
    },
    text: {
      main: "#ECEFF1",
      link: "#90CAF9",
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
    highlight: {
      main: "rgba(32,32,32,0.1)",
      inv: "rgba(255,255,255,0.1)"
    },
    status: {
      info: "#90CAF9",
      success: "#AED581",
      failure: "#E57373"
    },
    overlay: {
      dark: "rgba(0,0,0,0.6)",
      medium: "rgba(0,0,0,0.3)",
      light: "rgba(0,0,0,0.16)"
    }
  }
}
