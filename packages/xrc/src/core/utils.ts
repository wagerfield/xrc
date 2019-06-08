import { isString } from "onno"

export function test(regex: RegExp) {
  return (value: any): value is string => {
    return isString(value) && regex.test(value)
  }
}
