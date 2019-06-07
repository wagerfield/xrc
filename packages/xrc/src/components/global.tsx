import {
  jsx,
  InterpolationWithTheme,
  Global as GlobalStyles
} from "@emotion/core"
import { FunctionComponent } from "react"
import { Theme } from "../types"

export interface GlobalProps {
  styles: InterpolationWithTheme<Theme>
}

export const Global: FunctionComponent<GlobalProps> = (props) => (
  <GlobalStyles {...props} />
)
