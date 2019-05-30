import { FunctionComponent } from "react"
import { ThemeProvider } from "emotion-theming"
import { jsx, Global } from "@emotion/core"
import { globalStyle } from "onno-react"
import { MasterTheme } from "../themes/master"
import { Theme } from "../themes/types"

export interface BaseProps {
  theme: Theme
}

export const Base: FunctionComponent<BaseProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyle({ theme })} />
    {children}
  </ThemeProvider>
)

Base.defaultProps = {
  theme: MasterTheme
}
