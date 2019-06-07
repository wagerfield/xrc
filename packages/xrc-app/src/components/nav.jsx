import React from "react"
import { Box, Text } from "xrc"
import { Link } from "@reach/router"

export const NavLink = ({ to, children, justifySelf }) => (
  <Text
    as={Link}
    to={to}
    children={children}
    paddingX={12}
    paddingY={3}
    borderRadius="4px"
    lineHeight="single"
    css={{
      ":active,:hover": {
        background: "highlight.main"
      }
    }}
  />
)

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
  >
    <NavLink to="/">Home</NavLink>
    <NavLink to="/docs">Docs</NavLink>
    <NavLink to="/repl">REPL</NavLink>
  </Box>
)
