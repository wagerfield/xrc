import styled, { css } from "styled-components"
import { allPass, always, cond, ifElse, mergeRight, prop, propEq } from "ramda"
import { palette, ui } from "../../core/theme"
import { styleWhen } from "../../core/utils"
import { ButtonProps } from "./button.props"

export const defaultProps: ButtonProps = {
  variant: "primary",
  size: "large"
}

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
  [allPass([isSecondary, isSmall]), always("6px 14px")],
  [isLarge, always("16px 32px")],
  [isSmall, always("8px 16px")]
])

const small = css`
  height: ${ui.small.height};
  border-radius: ${ui.small.borderRadius};
  font-size: ${ui.small.fontSize};
`

const large = css`
  height: ${ui.large.height};
  border-radius: ${ui.large.borderRadius};
  font-size: ${ui.large.fontSize};
`

const primary = css`
  color: ${palette.text.contrast};
  background: ${palette.brand.primary};
  box-shadow: ${ui.shadow};
`

const secondary = css`
  color: ${palette.brand.primary};
  background: ${palette.background.contrast};
  border: ${ui.border} ${palette.brand.primary};
`

const alternative = css`
  color: ${palette.brand.primary};
  background: ${palette.overlay.light};
`

export const Button = styled.button.attrs(mergeRight(defaultProps))`
  box-sizing: border-box;
  display: inline-block;

  flex-grow: ${grow};
  flex-shrink: 0;

  margin: 0;
  border: none;
  padding: ${padding};

  font-family: ${ui.fontFamily};
  font-weight: ${ui.fontWeight};
  line-height: ${ui.lineHeight};

  text-transform: uppercase;
  white-space: nowrap;

  ${styleWhen(isSmall, small)}
  ${styleWhen(isLarge, large)}

  ${styleWhen(isPrimary, primary)}
  ${styleWhen(isSecondary, secondary)}
  ${styleWhen(isAlternative, alternative)}
`
