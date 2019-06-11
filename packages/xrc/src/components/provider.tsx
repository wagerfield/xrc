import { ThemeProvider } from "emotion-theming"
import { ThemeProps } from "../types/component"
import { element } from "./component"

export type ProviderProps = ThemeProps

export const Provider = element<ProviderProps>(ThemeProvider)
