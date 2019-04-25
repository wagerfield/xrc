import { BackgroundProperty, OverflowProperty } from "csstype"

export interface FlexProps {
  display?: "flex" | "inline-flex"
  direction?: "row" | "row-reverse" | "column" | "column-reverse"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"

  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch"
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"

  width?: string
  height?: string

  fillArea?: boolean
  fillWidth?: boolean
  fillHeight?: boolean

  overflow?: OverflowProperty
  overflowX?: OverflowProperty
  overflowY?: OverflowProperty

  background?: BackgroundProperty<0>
}
