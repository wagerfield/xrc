import { FunctionComponent } from "react"
import { globalStyle, isPlainObject } from "onno"
import { jsx, Global as GlobalStyles } from "@emotion/core"
import { InterpolationWithTheme, ThemeProps } from "../types/component"
import { isFunction } from "../core/utils"

export interface GlobalProps extends ThemeProps {
  css?: InterpolationWithTheme
  transform?: boolean
}

export const renderStyles = globalStyle

export const transformStyles = globalStyle.transformer!

export const Global: FunctionComponent<GlobalProps> = ({
  transform,
  theme,
  css
}) => {
  let styles = theme && isFunction(css) ? css(theme) : css
  if (transform && isPlainObject(styles)) {
    styles = transformStyles(styles as any, theme)
  }
  return <GlobalStyles styles={styles} />
}

Global.defaultProps = {
  transform: true
}
