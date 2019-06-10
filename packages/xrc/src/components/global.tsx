import { Global as GlobalStyles, InterpolationWithTheme } from "@emotion/core"
import { Theme } from "../types"
import { element } from "./component"

export interface GlobalProps {
  styles: InterpolationWithTheme<Theme>
}

export const Global = element<GlobalProps>(GlobalStyles)
