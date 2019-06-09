import { jsx } from "@emotion/core"
import { ComponentProps } from "../types"
import { createComponent } from "../core/component"
import { imageSet, ImageSetProps } from "../renderers/image"

export type ImageProps = ComponentProps & ImageSetProps

export const Image = createComponent<ImageProps>({
  name: "Image",
  renderers: [imageSet],
  styles: {
    boxSizing: "border-box",
    maxWidth: "100%"
  },
  render(props) {
    return <img {...props} />
  }
})
