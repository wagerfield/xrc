const FONT_FAMILY = "Avenir Next"

export const typography = {
  h1: {
    fontFamily: FONT_FAMILY,
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "36px"
  },
  h2: {
    fontFamily: FONT_FAMILY,
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "32px"
  },
  h3: {
    fontFamily: FONT_FAMILY,
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "32px"
  },
  body: {
    fontFamily: FONT_FAMILY,
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px"
  },
  meta: {
    fontFamily: FONT_FAMILY,
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px"
  }
}

export const palette = {
  debug: "rgba(0,160,240,0.1)",
  brand: {
    primary: "#00B67D",
    secondary: "#FF6A00"
  },
  text: {
    primary: "#202020",
    secondary: "#666666",
    contrast: "#FFFFFF"
  },
  background: {
    primary: "#F7F4EF",
    secondary: "#DDDAD4",
    contrast: "#FFFFFF"
  },
  feedback: {
    neutral: "#0277BD",
    negative: "#D50000",
    positive: "#00B67D"
  },
  overlay: {
    light: "rgba(0,0,0,0.04)",
    regular: "rgba(0,0,0,0.3)",
    dark: "rgba(0,0,0,0.6)"
  }
}

export const ui = {
  fontFamily: FONT_FAMILY,
  fontWeight: "700",
  lineHeight: "16px",
  border: "2px solid",
  shadow: "0 2px 4px rgba(0,0,0,0.16), 0 -4px 0 rgba(0,0,0,0.32) inset",
  large: {
    height: "48px",
    borderRadius: "24px",
    fontSize: "16px"
  },
  regular: {
    height: "40px",
    borderRadius: "20px",
    fontSize: "14px"
  },
  small: {
    height: "32px",
    borderRadius: "16px",
    fontSize: "14px"
  }
}
