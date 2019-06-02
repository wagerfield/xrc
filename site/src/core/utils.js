const README_REGEX = /(\/)?(readme)?(\.mdx)?$/

export const mapPath = (path, base) => {
  let mappedPath = path.replace(README_REGEX, "")
  if (base) mappedPath = mappedPath.replace(base, "")
  if (mappedPath === "") mappedPath = "docs"
  return mappedPath
}
