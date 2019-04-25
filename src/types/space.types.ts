export type SpaceValue = number | string

export type SpaceArray = SpaceValue[]

export type SpaceType = SpaceValue | SpaceArray

export interface Space {
  // Margin
  m: SpaceType
  mt: SpaceType
  mr: SpaceType
  mb: SpaceType
  ml: SpaceType
  mx: SpaceType
  my: SpaceType

  // Padding
  p: SpaceType
  pt: SpaceType
  pr: SpaceType
  pb: SpaceType
  pl: SpaceType
  px: SpaceType
  py: SpaceType
}
