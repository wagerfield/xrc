const code = `
const KEYS = [0, 1, 2]

const ButtonVariants = (props) => KEYS.map((key) => (
  <React.Fragment key={key}>
    <Button {...props} variant={key} />
    <Button {...props} variant={key}>Click me</Button>
  </React.Fragment>
))

const ButtonSizes = (props) => KEYS.map((key) => (
  <ButtonVariants key={key} size={key} />
))

const Container = (props) => (
  <Box
    minHeight="1"
    display="grid"
    alignContent="center"
    justifyContent="center"
    gridTemplateColumns="repeat(6, auto)"
    gridGap="4"
    padding="4"
    {...props}
  />
)

render(
  <Container>
    <ButtonSizes />
  </Container>
)
`

export default { code, inline: true }
