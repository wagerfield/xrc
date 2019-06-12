import React from "react"
import { Link } from "@reach/router"
import { Wrapper } from "../components/wrapper"
import { stringifyExample } from "../core/utils"
import examples from "../examples"

const Example = ({ key, label, props }) => {
  const path = `/view?${stringifyExample(props)}`
  return (
    <li key={key}>
      <Link to={path}>{label}</Link>{" "}
    </li>
  )
}

export default () => (
  <Wrapper>
    <ul>{examples.map(Example)}</ul>
  </Wrapper>
)
