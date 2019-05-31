import { jsx, InterpolationWithTheme } from "@emotion/core"
import { FunctionComponent } from "react"
import { globalStyle } from "onno-react"
import { Theme } from "../themes/types"
import { MasterTheme } from "../themes/master"
import { Provider, ProviderProps } from "./provider"
import { Global } from "./global"

export interface BaseProps extends ProviderProps {
  normalize?: boolean
}

export const Base: FunctionComponent<BaseProps> = ({
  children,
  normalize,
  theme
}) => {
  const styles: InterpolationWithTheme<Theme> = globalStyle({ theme }) || []
  if (normalize) styles.unshift(require("normalize.css"))
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
