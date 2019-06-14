import { ImgHTMLAttributes } from "react"
import { imageSet, ImageSetProps } from "../renderers/image"
import { component, element } from "../core/factory"

export type ImageAttributes = ImgHTMLAttributes<HTMLImageElement>

export type ImageStyleProps = ImageSetProps

export type ImageProps = ImageStyleProps

export const withImageStyles = component<ImageProps>({
  name: "Image",
  renderers: [imageSet],
  styles: {
    boxSizing: "border-box",
    maxWidth: "100%"
  }
})

export const Image = withImageStyles(element<ImageAttributes>("img"))
