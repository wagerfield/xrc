const README = /(\/)?(readme)?(\.mdx?)?$/

export const mapPath = (path) => path.replace(README, "")
