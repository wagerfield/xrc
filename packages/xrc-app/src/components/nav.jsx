import React from "react"
import { Link } from "@reach/router"
import { Logo, Text, Box } from "xrc"
import { omit, isArray, isString } from "onno"

const activeStyles = {
  background: "overlay.light"
}

const pseudoStyles = {
  ":active,:hover": activeStyles
}

const omitNavProps = omit({
  propsKeys: ["links"]
})

const mapLink = (props, index) => {
  const isAnchor = isString(props.href)
  const navLinkProps = {
    as: isAnchor ? "a" : Link,
    marginLeft: index ? null : "auto",
    children: props.text,
    key: props.key
  }
  if (isAnchor) {
    navLinkProps.href = props.href
    navLinkProps.target = "_blank"
  } else {
    navLinkProps.to = props.path
  }
  return <NavLink {...navLinkProps} />
}

const NavLink = (props) => (
  <Text
    css={pseudoStyles}
    fontSize="md"
    fontSmoothing="antialiased"
    lineHeight="single"
    textStyle="caps"
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
    <Logo to="/" as={Link} css={pseudoStyles} borderRadius="xs" padding="3" />
    {isArray(props.links) ? props.links.map(mapLink) : null}
  </Box>
)
