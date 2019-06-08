import { createComponent, ComponentProps } from "./factory"
import { imageSet, ImageSetProps } from "../renderers/image"

export type ImageProps = ComponentProps & ImageSetProps

export const Image = createComponent<ImageProps>({
  name: "Image",
  renderers: [imageSet],
  styles: {
    boxSizing: "border-box",
    maxWidth: "100%"
  },
  defaultProps: {
    as: "img"
  }
})
