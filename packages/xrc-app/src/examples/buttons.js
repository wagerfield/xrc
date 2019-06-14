const code = `
<Box
  minHeight="1"
  display="grid"
  alignContent="center"
  justifyContent="center"
  gridTemplateColumns="repeat(6, auto)"
  gridGap="4"
  padding="4"
>
  {/* Large */}
  <Button var="0" as="a"/>
  <Button var="0">Click me</Button>
  <Button var="1"/>
  <Button var="1" as="a">Click me</Button>
  <Button var="2"/>
  {/* Medium */}
  <Button var="2">Click me</Button>
  <Button var="0" size="md" as="a"/>
  <Button var="0" size="md">Click me</Button>
  <Button var="1" size="md"/>
  <Button var="1" size="md" as="a">Click me</Button>
  <Button var="2" size="md"/>
  <Button var="2" size="md">Click me</Button>
  {/* Small */}
  <Button var="0" size="sm" as="a"/>
  <Button var="0" size="sm">Click me</Button>
  <Button var="1" size="sm"/>
  <Button var="1" size="sm" as="a">Click me</Button>
  <Button var="2" size="sm"/>
  <Button var="2" size="sm">Click me</Button>
</Box>
`

export default { code, inline: false }
