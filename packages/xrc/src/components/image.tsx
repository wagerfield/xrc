import { component, element } from "../core/component"
import { imageSet, ImageSetProps } from "../renderers/image"

export type ImageProps = ImageSetProps

export const withImageStyles = component<ImageProps>({
  name: "Image",
  renderers: [imageSet],
  styles: {
    boxSizing: "border-box",
    maxWidth: "100%"
  }
})

export const Image = withImageStyles(element("img"))
