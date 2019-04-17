import styled, { css } from "styled-components"
import { allPass, always, cond, ifElse, prop, propEq } from "ramda"
import { styleWhen, theme } from "../../core/utils"
import { MasterTheme } from "../../themes/master.theme"
import { ButtonProps } from "./button.types"

const sizeEq = propEq("size")
const isSmall = sizeEq("small")
const isLarge = sizeEq("large")

const variantEq = propEq("variant")
const isPrimary = variantEq("primary")
const isSecondary = variantEq("secondary")
const isAlternative = variantEq("alternative")

const grow = ifElse(prop("grow"), always(1), always(0))

const padding = cond([
  [allPass([isSecondary, isLarge]), always("14px 30px")],
  [allPass([isSecondary, isSmall]), always("7px 14px")],
  [isLarge, always("16px 32px")],
  [isSmall, always("8px 16px")]
])

const small = css`
  height: ${theme("sizeSmall")};
  border-radius: ${theme("radiusSmall")};
  font-size: ${theme("fontSizeSmall")};
`

const large = css`
  height: ${theme("sizeLarge")};
  border-radius: ${theme("radiusLarge")};
  font-size: ${theme("fontSizeRegular")};
`

const primary = css`
  color: ${theme("colorTextContrast")};
  background: ${theme("colorBrandPrimary")};
  box-shadow: ${theme("shadowButton")};
`

const secondary = css`
  color: ${theme("colorBrandPrimary")};
  background: ${theme("colorBackgroundContrast")};
  border: ${theme("border")} ${theme("colorBrandPrimary")};
`

const alternative = css`
  color: ${theme("colorBrandPrimary")};
  background: ${theme("colorOverlayLight")};
`

export const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  display: inline-block;

  flex-grow: ${grow};
  flex-shrink: 0;

  margin: 0;
  border: none;
  padding: ${padding};

  font-family: ${theme("fontFamilyRegular")};
  font-weight: ${theme("fontWeightBold")};
  line-height: ${theme("lineHeightReset")};

  text-transform: uppercase;
  white-space: nowrap;

  ${styleWhen(isSmall, small)}
  ${styleWhen(isLarge, large)}

  ${styleWhen(isPrimary, primary)}
  ${styleWhen(isSecondary, secondary)}
  ${styleWhen(isAlternative, alternative)}
`

Button.defaultProps = {
  theme: MasterTheme,
  variant: "primary",
  size: "large"
}

export default Button
