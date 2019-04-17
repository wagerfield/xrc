import Theme from "./theme.types"
import MasterTheme from "./master.theme"

export const DemoTheme: Theme = {
  ...MasterTheme,

  // Font Family
  fontFamilyHeading: "Roboto Mono",
  fontFamilyRegular: "Roboto Mono",

  // Color: Brand
  colorBrandPrimary: "#606090",

  // Color: Background
  colorBackgroundPrimary: "#FAFAFC",

  // Radius
  radiusLarge: "8px",
  radiusMedium: "4px",
  radiusSmall: "4px"
}

export default DemoTheme
