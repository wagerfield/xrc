import { ThemeProvider } from "emotion-theming"
import { ThemeProps } from "../types/component"
import { MasterTheme } from "../themes/master"
import { element } from "../core/factory"

export type ProviderProps = ThemeProps

export const Provider = element<ProviderProps>(ThemeProvider)

Provider.defaultProps = {
  theme: MasterTheme
}
