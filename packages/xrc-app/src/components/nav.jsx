import React from "react"
import { Box } from "xrc"
import { Link } from "@reach/router"

// export const NavLink = (props) => <Box as={Link} display="block" padding="3" {...props} />

export const Nav = () => (
  <Box
    as="nav"
    position="relative"
    zIndex="1"
    display="flex"
    padding="4"
    width="1"
    textStyle="caps"
    background="fill.main"
    boxShadow="sm"
  >
    <Link to="/">Home</Link>
    <Link to="/docs">Docs</Link>
    <Link to="/repl">REPL</Link>
  </Box>
)
