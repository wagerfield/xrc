import { isArray } from "onno"
import { jsx } from "@emotion/core"
import { FunctionComponent } from "react"
import { MasterTheme } from "../themes/master"
import { StyleProps, ThemeProps } from "../types/component"
import { renderFonts, FontFaceOptions } from "../core/fonts"
import { normalize as normalizeStyles } from "../core/normalize"
import { renderStyles, transformStyles, Global } from "./global"
import { Provider } from "./provider"

export interface BaseProps extends StyleProps, ThemeProps {
  fonts?: FontFaceOptions[]
  normalize?: boolean
}

export const Base: FunctionComponent<BaseProps> = ({
  normalize,
  children,
  fonts,
  theme,
  styles
}) => {
  const globalStyles = renderStyles({ theme }) || []
  if (styles) globalStyles.push(transformStyles(styles as any, theme) as any)
  if (isArray(fonts)) globalStyles.unshift(...renderFonts(fonts))
  if (normalize) globalStyles.unshift(normalizeStyles as any)
  return (
    <Provider theme={theme}>
      <Global styles={globalStyles} transform={false} />
      {children}
    </Provider>
  )
}

Base.defaultProps = {
  normalize: true,
  theme: MasterTheme
}
