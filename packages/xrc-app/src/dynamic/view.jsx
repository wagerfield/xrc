import React from "react"
import { REPL } from "../components/repl"
import { getExample } from "../examples"

export default () => <REPL {...getExample("/view")} preview fullscreen />
