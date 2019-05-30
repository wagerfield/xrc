export const mapPath = (path) => {
  const result = path.replace(/(\/readme)?\.mdx$/, "")
  return result === "" ? "/docs" : result
}
