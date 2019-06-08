import {
  compose,
  animation,
  AnimationProps,
  AnimationStyle,
  transition,
  TransitionProps,
  TransitionStyle
} from "onno"

export type AnimationSetProps = AnimationProps & TransitionProps

export type AnimationSetStyle = AnimationStyle & TransitionStyle

export const animationSet = compose<AnimationSetProps, AnimationSetStyle>({
  name: "animation",
  renderers: [animation, transition]
})
