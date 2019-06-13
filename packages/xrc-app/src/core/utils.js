import { parse, stringify } from "query-string"

export const ROOT = "https://xrc.netlify.com"

export const README = /(\/)?(readme)?(\.mdx?)?$/

export const propEq = (key) => (value) => (obj) => obj[key] === value

export const mapPath = (path) => path.replace(ROOT, "").replace(README, "")

export const isString = (str) => typeof str === "string"

export const encodeNewlines = (str) => {
  return isString(str) ? str.replace(/\n|\r/g, "\\n") : null
}

export const decodeNewlines = (str) => {
  return isString(str) ? str.replace(/\\n/g, "\n") : null
}

export const encodeExample = (example) => ({
  code: encodeNewlines(example.code),
  inline: example.inline
})

export const decodeExample = (example) => ({
  code: decodeNewlines(example.code),
  inline: example.inline === "true"
})

export const exampleToQuery = (example) => {
  return stringify(encodeExample(example))
}

export const queryToExample = (query) => {
  return decodeExample(parse(query))
}
