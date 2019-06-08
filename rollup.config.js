import { join } from "path"
import { sync } from "glob"
import { sizeSnapshot } from "rollup-plugin-size-snapshot"
import typescript from "rollup-plugin-typescript"
import prettier from "rollup-plugin-prettier"

export default sync("packages/!(xrc-app)").map((pkg) => ({
  input: join(pkg, "src/index.ts"),
  output: [
    {
      file: join(pkg, "cjs/index.js"),
      format: "cjs"
    },
    {
      file: join(pkg, "esm/index.js"),
      format: "esm"
    }
  ],
  plugins: [
    typescript({
      removeComments: true
    }),
    prettier({
      parser: "babel"
    }),
    sizeSnapshot({
      snapshotPath: "stats.json",
      printInfo: false
    })
  ],
  external: ["@emotion/core", "emotion-theming", "onno", "react"]
}))
