import { ThemeProvider } from "emotion-theming"
import { Theme } from "../types"
import { element } from "./component"

export interface ProviderProps {
  theme: Theme
}

export const Provider = element<ProviderProps>(ThemeProvider)
