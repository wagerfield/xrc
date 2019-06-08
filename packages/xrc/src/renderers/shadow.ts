import {
  compose,
  boxShadow,
  BoxShadowProps,
  BoxShadowStyle,
  textShadow,
  TextShadowProps,
  TextShadowStyle
} from "onno"

export type ShadowSetProps = BoxShadowProps & TextShadowProps

export type ShadowSetStyle = BoxShadowStyle & TextShadowStyle

export const shadowSet = compose<ShadowSetProps, ShadowSetStyle>({
  name: "shadow",
  renderers: [boxShadow, textShadow]
})
