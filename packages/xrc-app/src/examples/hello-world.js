const code = `
<Box
  size="1"
  padding="5"
  display="flex"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
>
  <Heading>Hejsan 👋</Heading>
  <Text as="p">You look <Text as="strong" color="hotpink">nice</Text>.</Text>
  <Button mt={3} onClick={() => alert("Me again 👋")}>Click me</Button>
</Box>
`

export default { code }
