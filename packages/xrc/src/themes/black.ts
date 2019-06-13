import { Theme } from "../types/theme"
import { MasterTheme } from "./master"

export const BlackTheme: Theme = {
  ...MasterTheme,
  colors: {
    brand: [
      { alias: "primary", value: "#80CBC4" },
      { alias: "secondary", value: "#CE93D8" }
    ],
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
    status: {
      info: "#90CAF9",
      success: "#AED581",
      failure: "#E57373"
    },
    overlay: {
      dark: "rgba(0,0,0,0.64)",
      medium: "rgba(0,0,0,0.32)",
      light: "rgba(0,0,0,0.16)"
    }
  }
}
