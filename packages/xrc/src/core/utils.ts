import { isString, isType, Func } from "onno"

export const isFunction = isType<Func>("function")

export function test(regex: RegExp) {
  return (value: any): value is string => {
    return isString(value) && regex.test(value)
  }
}
