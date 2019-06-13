import { parse, stringify } from "query-string"

export const ROOT = "https://xrc.netlify.com"

export const README = /(\/)?(readme)?(\.mdx?)?$/

export const mapPath = (path) => path.replace(ROOT, "").replace(README, "")

export const isString = (str) => typeof str === "string"

export const encodeNewlines = (str) => {
  return isString(str) ? str.replace(/\n|\r/g, "\\n") : null
}

export const decodeNewlines = (str) => {
  return isString(str) ? str.replace(/\\n/g, "\n") : null
}

export const encodeExample = (example) => {
  return Object.assign({}, example, {
    code: encodeNewlines(example.code)
  })
}

export const decodeExample = (example) => {
  return Object.assign({}, example, {
    code: decodeNewlines(example.code)
  })
}

export const stringifyExample = (example) => {
  return stringify(encodeExample(example))
}

export const parseExample = (example) => {
  return decodeExample(parse(example))
}
