import { always, propEq } from "ramda"
import styled from "styled-components"
import { prop, theme, styleIfElse } from "../../core/utils"
import { MasterTheme } from "../../themes/master.theme"
import { TextProps } from "./text.types"

const isSmall = propEq("size", "small")
const isItalic = propEq("italic", true)
const isBold = propEq("bold", true)

const regularSize = theme("fontSizeRegular")
const smallSize = theme("fontSizeSmall")

const regularWeight = theme("fontWeightRegular")
const boldWeight = theme("fontWeightBold")

const regularStyle = always("normal")
const italicStyle = always("italic")

export const Text = styled.p<TextProps>`
  display: ${prop("display")};

  font-family: ${theme("fontFamilyRegular")};
  font-weight: ${styleIfElse(isBold, boldWeight, regularWeight)};
  font-style: ${styleIfElse(isItalic, italicStyle, regularStyle)};
  font-size: ${styleIfElse(isSmall, smallSize, regularSize)};

  line-height: ${theme("lineHeightRegular")};
  text-align: ${prop("align")};

  margin: 0;
`

Text.defaultProps = {
  theme: MasterTheme,
  size: "regular",
  align: "left"
}
