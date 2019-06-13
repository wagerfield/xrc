import { ComponentType, ElementType, FunctionComponent } from "react"
import { interpolate, omit, pick, variant as onnoVariant } from "onno"
import { withTheme } from "emotion-theming"
import { jsx } from "@emotion/core"
import {
  ComponentKeys,
  AnyStyleObject,
  PolymorphProps,
  VariantOptions,
  ComponentOptions,
  MergedComponentProps
} from "../types/component"
import { isFunction } from "../core/utils"

const KEYS: ComponentKeys[] = ["css", "style", "forward"]

// RP: RendererProps
// CP: ComponentProps
// MP: MergedComponentProps
export function component<RP>({
  name,
  styles,
  renderers
}: ComponentOptions<RP>) {
  const transform = interpolate<RP, any>({ name, renderers })
  const omitProps = omit<RP>({ propsKeys: KEYS, renderers })

  // With styles function
  return function withStyles<CP, MP extends MergedComponentProps<CP & RP>>(
    Component: ComponentType<CP>
  ): FunctionComponent<MP> {
    // Higher Order Component
    return withTheme((props: MP) => {
      const { css, style, theme, forward } = props

      // Call base styles with props
      const baseStyles = isFunction(styles) ? styles(props) : styles

      // Props filter functions
      const pickProps = pick<MP>({ propsKeys: forward })

      // Prepare component props
      const componentProps = {
        ...omitProps(props),
        ...pickProps(props),
        css: [
          transform(baseStyles as AnyStyleObject, theme),
          transform.renderer(props),
          transform(css as AnyStyleObject, theme)
        ]
      }

      // Transform style prop
      if (style) componentProps.style = transform(style as any, theme)

      // Render component with filtered props
      return <Component {...(componentProps as MP)} />
    }) as FunctionComponent<MP>
  }
}

export function element<P>(Element: ElementType): FunctionComponent<P> {
  return (props) => <Element {...props} />
}

const omitPolymorphProps = omit({ propsKeys: ["as"] })

export function polymorph<P>(
  defaultElement: ElementType
): FunctionComponent<PolymorphProps & P> {
  return (props) => {
    const Element = props.as || defaultElement
    return <Element {...omitPolymorphProps(props)} />
  }
}

export function variant<P>({ themeKey, renderer }: VariantOptions) {
  return onnoVariant<P, any>({
    propsKeys: ["variant", "var", "v"],
    themeKeys: [`components.${themeKey}`],
    renderers: [renderer]
  })
}
