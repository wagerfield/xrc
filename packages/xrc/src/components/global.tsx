import { FunctionComponent } from "react"
import { globalStyle, isPlainObject } from "onno"
import { jsx, Global as GlobalStyles } from "@emotion/core"
import { AnyStyleObject, StyleProps, ThemeProps } from "../types/component"
import { Theme } from "../types/theme"

export interface GlobalProps extends StyleProps, ThemeProps {
  transform?: boolean
}

export const renderStyles = globalStyle

export const transformStyles = globalStyle.transformer!

export const withTheme = (styles: AnyStyleObject) => {
  return (theme: Theme) => transformStyles(styles, theme)
}

export const Global: FunctionComponent<GlobalProps> = ({
  transform,
  styles,
  theme
}) => {
  let globalStyles = styles
  if (transform && isPlainObject(styles)) {
    globalStyles = withTheme(styles as AnyStyleObject)
    if (theme) globalStyles = globalStyles(theme)
  }
  return <GlobalStyles styles={globalStyles} />
}

Global.defaultProps = {
  transform: true
}
