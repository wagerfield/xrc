import { isString } from "onno-react"

export function test(regex: RegExp) {
  return (value: any): value is string => {
    return isString(value) && regex.test(value)
  }
}
