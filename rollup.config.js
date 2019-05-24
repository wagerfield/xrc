import prettier from "rollup-plugin-prettier"
import typescript from "rollup-plugin-typescript"
import { sizeSnapshot } from "rollup-plugin-size-snapshot"

export default {
  input: "src/index.ts",
  output: [
    {
      file: "cjs/index.js",
      format: "cjs"
    },
    {
      file: "esm/index.js",
      format: "esm"
    }
  ],
  plugins: [
    typescript(),
    prettier({
      parser: "babel"
    }),
    sizeSnapshot({
      snapshotPath: "stats.json",
      printInfo: false
    })
  ],
  external: ["@emotion/core", "onno-react"]
}
