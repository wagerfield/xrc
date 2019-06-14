import { uiSet, UISetProps } from "../renderers/ui"
import { component } from "../core/factory"

export type UIStyleProps = UISetProps

export type UIProps = UIStyleProps

export const withUIStyles = component<UIProps>({
  name: "UI",
  renderers: [uiSet]
})
