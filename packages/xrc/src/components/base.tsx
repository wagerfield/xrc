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
  fonts?: FontFaceOptions[]
  normalize?: boolean
}

export const Base: FunctionComponent<BaseProps> = ({
  normalize,
  children,
  fonts,
  theme
}) => {
  const styles: InterpolationWithTheme<Theme> = globalStyle({ theme }) || []
  if (isArray(fonts)) styles.unshift.apply(styles, renderFonts(fonts) as any)
  if (normalize) styles.unshift(normalizeStyles as any)
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
