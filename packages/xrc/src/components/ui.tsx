import { uiSet, UISetProps } from "../renderers/ui"
import { component } from "../core/factory"

export const withUIStyles = component<UISetProps>({
  name: "UI",
  renderers: [uiSet]
})
