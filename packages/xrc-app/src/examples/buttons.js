const code = `
const SIZES = ["lg", "md", "sm"]

const VARIANTS = ["primary", "secondary", "alternative"]

const ButtonVariants = (props) => VARIANTS.map((key) => (
  <React.Fragment key={key}>
    <Button {...props} variant={key} icon="bug" />
    <Button {...props} variant={key} text="Click me" />
  </React.Fragment>
))

const ButtonSizes = (props) => SIZES.map((key) => (
  <ButtonVariants key={key} size={key} />
))

render(
  <Grid cols="6">
    <ButtonSizes />
  </Grid>
)
`

export default { code, inline: true }
