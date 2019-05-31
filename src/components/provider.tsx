import { jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { FunctionComponent } from "react"
import { Theme } from "../themes/types"

export interface ProviderProps {
  theme: Theme
}

export const Provider: FunctionComponent<ProviderProps> = (props) => (
  <ThemeProvider {...props} />
)
