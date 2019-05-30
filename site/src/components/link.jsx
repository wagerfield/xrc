import React from "react"
import { Link as RouterLink } from "@reach/router"
import { mapPath } from "../core/utils"

export const Link = ({ children, href }) => {
  return <RouterLink to={mapPath(href)} children={children} />
}
