import { component } from "../core/component"
import { imageSet, ImageSetProps } from "../renderers/image"
import { createPolymorph, PolymorphProps } from "./polymorph"

export type ImageProps = PolymorphProps & ImageSetProps

export const withImageStyles = component<ImageProps>({
  name: "Image",
  renderers: [imageSet],
  styles: {
    boxSizing: "border-box",
    maxWidth: "100%"
  }
})

export const Image = withImageStyles(createPolymorph("img"))
