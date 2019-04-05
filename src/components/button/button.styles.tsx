import styled, { css } from "styled-components"
import { allPass, always, cond, propEq } from "ramda"
import { ButtonProps as Props } from "./button.types"

const sizeEq = propEq("size")
const isSmall = sizeEq("small")
const isLarge = sizeEq("large")

const variantEq = propEq("variant")
const isPrimary = variantEq("primary")
const isSecondary = variantEq("secondary")
const isAlternative = variantEq("alternative")

const padding = cond([
  [allPass([isSecondary, isLarge]), always("14px 30px")],
  [allPass([isSecondary, isSmall]), always("6px 14px")],
  [isLarge, always("16px 32px")],
  [isSmall, always("8px 16px")]
])

const flex = (p: Props) =>
  p.flex &&
  css`
    flex-grow: 1;
    flex-shrink: 0;
  `

const small = (p: Props) =>
  isSmall(p) &&
  css`
    height: 32px;
    border-radius: 16px;
    font-size: 14px;
  `

const large = (p: Props) =>
  isLarge(p) &&
  css`
    height: 48px;
    border-radius: 24px;
    font-size: 16px;
  `

const primary = (p: Props) =>
  isPrimary(p) &&
  css`
    border: none;
    color: #ffffff;
    background: #00b67d;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16),
      0 -4px 0 rgba(0, 0, 0, 0.32) inset;
  `

const secondary = (p: Props) =>
  isSecondary(p) &&
  css`
    color: #00b67d;
    background: #ffffff;
    border: 2px solid #00b67d;
  `

const alternative = (p: Props) =>
  isAlternative(p) &&
  css`
    border: none;
    color: #00b67d;
    background: rgba(0, 0, 0, 0.04);
  `

export const StyledButton = styled.button`
  box-sizing: border-box;
  display: inline-block;

  margin: 0;
  padding: ${padding};

  font-family: "Avenir Next";
  font-weight: bold;
  line-height: 16px;

  text-transform: uppercase;
  white-space: nowrap;

  ${flex}

  ${small}
  ${large}

  ${primary}
  ${secondary}
  ${alternative}
`
