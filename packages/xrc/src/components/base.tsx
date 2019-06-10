import { FunctionComponent } from "react"
import { isArray, globalStyle } from "onno"
import { jsx, InterpolationWithTheme } from "@emotion/core"
import { normalize as normalizeStyles } from "../core/normalize"
import { renderFonts, FontFaceOptions } from "../core/fonts"
import { Provider, ProviderProps } from "./provider"
import { MasterTheme } from "../themes/master"
import { Global } from "./global"
import { Theme } from "../types"

export interface BaseProps extends ProviderProps {
  css?: InterpolationWithTheme<Theme>
  fonts?: FontFaceOptions[]
  normalize?: boolean
}

export const Base: FunctionComponent<BaseProps> = ({
  normalize,
  children,
  fonts,
  theme,
  css
}) => {
  const styles = globalStyle({ theme }) || []
  if (isArray(fonts)) styles.unshift(...renderFonts(fonts))
  if (normalize) styles.unshift(normalizeStyles as any)
  if (css) styles.unshift(globalStyle.transformer!(css as any, theme) as any)
  return (
    <Provider theme={theme}>
      <Global styles={styles} />
      {children}
    </Provider>
  )
}

Base.defaultProps = {
  normalize: true,
  theme: MasterTheme
}
