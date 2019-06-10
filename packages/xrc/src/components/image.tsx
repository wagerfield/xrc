import { imageSet, ImageSetProps } from "../renderers/image"
import { component, element } from "./component"

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
