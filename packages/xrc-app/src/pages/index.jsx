import React from "react"
import { REPL } from "../components/repl"

export const code = `
<Box bg="overlay.dark" p="5">
  <Box var="main" p="5" rad="lg" bsh="lg">
    <Heading>👋 Hejsan</Heading>
    <Text>Welcome to the <code>xrc</code> docs. Here you will find everything you need to get up and running.</Text>
    <Button var="secondary" my="5">Get started</Button>
    <Image display="block" src="http://www.fillmurray.com/200/200" />
  </Box>
</Box>
`

export default () => <REPL code={code} />
