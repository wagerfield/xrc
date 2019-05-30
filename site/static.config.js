import { resolve } from "path"

export default {
  entry: "index.tsx",
  plugins: [
    "react-static-plugin-typescript",
    "react-static-plugin-reach-router",
    [
      "react-static-plugin-source-filesystem",
      {
        location: resolve("src/pages")
      }
    ]
  ],
  devServer: {
    host: "0.0.0.0",
    port: 5000
  }
}
