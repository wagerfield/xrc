import { isArray } from "onno"
import { jsx } from "@emotion/core"
import { FunctionComponent } from "react"
import { MasterTheme } from "../themes/master"
import { InterpolationWithTheme } from "../types/component"
import { renderFonts, FontFaceOptions } from "../core/fonts"
import { normalize as normalizeStyles } from "../core/normalize"
import { renderStyles, transformStyles, Global } from "./global"
import { Provider, ProviderProps } from "./provider"

export interface BaseProps extends ProviderProps {
  css?: InterpolationWithTheme
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
  const styles = renderStyles({ theme }) || []
  if (isArray(fonts)) styles.unshift(...renderFonts(fonts))
  if (normalize) styles.unshift(normalizeStyles as any)
  if (css) styles.unshift(transformStyles(css as any, theme) as any)
  return (
    <Provider theme={theme}>
      <Global transform={false} css={styles} />
      {children}
    </Provider>
  )
}

Base.defaultProps = {
  normalize: true,
  theme: MasterTheme
}
