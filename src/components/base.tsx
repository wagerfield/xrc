import { FunctionComponent } from "react"
import { jsx, Global } from "@emotion/core"
import { colorSet, spaceSet, textSet, variant } from "onno-react"
import { MasterTheme } from "../themes/master"
import { Theme } from "../themes/types"

export interface BaseProps {
  theme: Theme
}

const globalStyle = variant({
  propsKeys: ["global"],
  themeKeys: ["globalStyles"],
  renderers: [colorSet, spaceSet, textSet]
})

export const Base: FunctionComponent<BaseProps> = (props) => (
  <Global
    styles={globalStyle({
      global: [],
      theme: props.theme
    })}
  />
)

Base.defaultProps = {
  theme: MasterTheme
}
