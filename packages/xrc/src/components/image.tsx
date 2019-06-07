import { createComponent, ComponentProps } from "./factory"
import { imageSet, ImageSetProps } from "../renderers/image"

export type ImageProps = ComponentProps & ImageSetProps

export const Image = createComponent<ImageProps>({
  name: "Image",
  styles: {
    boxSizing: "border-box",
    maxWidth: "100%"
  },
  renderers: [imageSet],
  defaultProps: {
    as: "img"
  }
})
