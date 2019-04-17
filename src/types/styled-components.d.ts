import "styled-components"
import Theme from "../themes/theme.types"

declare module "styled-components" {
  // tslint:disable-next-line
  export interface DefaultTheme extends Theme {}
}
