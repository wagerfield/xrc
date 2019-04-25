import { propEq } from "ramda"
import styled from "styled-components"
import { prop, theme, styleWhen } from "../../core/utils"
import { MasterTheme } from "../../themes/master.theme"
import { HeadingProps } from "./heading.types"

const tagEq = propEq("as")

export const Heading = styled.h1<HeadingProps>`
  font-family: ${theme("fontFamilyHeading")};
  font-weight: ${theme("fontWeightBold")};

  font-size: ${styleWhen(tagEq("h1"), theme("fontSizeHeading1"))};
  font-size: ${styleWhen(tagEq("h2"), theme("fontSizeHeading2"))};
  font-size: ${styleWhen(tagEq("h3"), theme("fontSizeHeading3"))};

  line-height: ${theme("lineHeightHeading")};

  text-align: ${prop("align")};

  margin: 0;
`

Heading.defaultProps = {
  theme: MasterTheme,
  align: "left",
  as: "h1"
}
