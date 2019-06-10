import React from "react"
import { Link } from "@reach/router"
import { omit, isArray } from "onno"
import { Logo, Text, Box } from "xrc"

const hoverStyles = {
  ":active,:hover": {
    background: "overlay.light"
  }
}

const omitNavProps = omit({
  propsKeys: ["links"]
})

const mapLink = (props, index) => (
  <NavLink
    key={props.key}
    to={props.path}
    ml={!index ? "auto" : null}
    children={props.text}
  />
)

const NavLink = (props) => (
  <Text
    as={Link}
    css={hoverStyles}
    textStyle="caps"
    lineHeight="single"
    fontSmoothing="antialiased"
    borderRadius="xs"
    marginRight="3"
    paddingX="12"
    paddingY="3"
    {...props}
  />
)

export const Nav = (props) => (
  <Box
    as="nav"
    display="flex"
    width="1"
    height="xl"
    paddingX="3"
    paddingY="3"
    alignItems="center"
    background="fill.main"
    zIndex="1"
    {...omitNavProps(props)}
  >
    <Logo to="/" as={Link} css={hoverStyles} borderRadius="xs" padding="3" />
    {isArray(props.links) ? props.links.map(mapLink) : null}
  </Box>
)
