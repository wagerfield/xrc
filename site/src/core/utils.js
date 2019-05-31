const README_REGEX = /(\/)?(readme)?(\.mdx)?$/

export const mapPath = (path) => {
  let mappedPath = path.replace(README_REGEX, "")
  if (mappedPath === "") mappedPath = "docs"
  return mappedPath
}
