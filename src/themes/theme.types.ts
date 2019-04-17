export interface Theme {
  // Font Family
  fontFamilyHeading: string
  fontFamilyRegular: string

  // Font Size
  fontSizeHeading1: string
  fontSizeHeading2: string
  fontSizeHeading3: string
  fontSizeRegular: string
  fontSizeSmall: string

  // Font Weight
  fontWeightRegular: number
  fontWeightBold: number

  // Line Height
  lineHeightHeading: number
  lineHeightRegular: number
  lineHeightReset: number

  // Color: Brand
  colorBrandPrimary: string
  colorBrandSecondary: string

  // Color: Background
  colorBackgroundPrimary: string
  colorBackgroundSecondary: string
  colorBackgroundContrast: string
  colorBackgroundDebug: string

  // Color: Text
  colorTextPrimary: string
  colorTextSecondary: string
  colorTextContrast: string

  // Color: Feedback
  colorFeedbackNeutral: string
  colorFeedbackNegative: string
  colorFeedbackPositive: string

  // Color: Overlay
  colorOverlayLight: string
  colorOverlayMedium: string
  colorOverlayDark: string

  // Border
  border: string

  // Size
  sizeLarge: string
  sizeMedium: string
  sizeSmall: string

  // Radius
  radiusLarge: string
  radiusMedium: string
  radiusSmall: string

  // Shadow
  shadowButton: string
}

export interface ThemeProps {
  theme?: Theme
}

export default Theme
