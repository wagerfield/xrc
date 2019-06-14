import { ComponentType, ElementType, FunctionComponent } from "react"
import { withTheme } from "emotion-theming"
import { jsx } from "@emotion/core"
import {
  omit,
  pick,
  isFunction,
  interpolate,
  variant as onnoVariant
} from "onno"
import {
  VariantKeys,
  ComponentKeys,
  AnyStyleObject,
  PolymorphProps,
  VariantOptions,
  ComponentOptions,
  MergedComponentProps
} from "../types/component"

export const COMPONENT_KEYS: ComponentKeys[] = [
  "css",
  "style",
  "theme",
  "forward"
]

export const VARIANT_KEYS: VariantKeys[] = ["variant", "var", "v"]

// RP: RendererProps
// CP: ComponentProps
// MP: MergedComponentProps
export function component<RP>({
  name,
  styles,
  omitKeys,
  pickKeys,
  renderers
}: ComponentOptions<RP>) {
  const transform = interpolate<RP, any>({ name, renderers })
  const omitRendererProps = omitKeys && omit<RP>({ propsKeys: omitKeys })
  const pickRendererProps = pickKeys && pick<RP>({ propsKeys: pickKeys })
  const omitComponentProps = omit<RP>({ propsKeys: COMPONENT_KEYS, renderers })

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
      const pickComponentProps = pick<MP>({ propsKeys: forward })

      // Prepare renderer props
      let rendererProps = props as Partial<RP>
      if (omitRendererProps) rendererProps = omitRendererProps(props)
      if (pickRendererProps) rendererProps = pickRendererProps(props)

      // Prepare component props
      const componentProps = {
        ...omitComponentProps(props),
        ...pickComponentProps(props),
        css: [
          transform(baseStyles as AnyStyleObject, theme),
          transform.renderer(rendererProps as any),
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
    propsKeys: VARIANT_KEYS,
    themeKeys: [`components.${themeKey}`],
    renderers: [renderer]
  })
}
