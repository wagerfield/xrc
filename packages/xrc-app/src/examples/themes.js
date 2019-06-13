const code = `
<Box
  padding="4"
  fontSize="xs"
  color="rgb(180,200,220)"
  background="rgb(40,44,52)"
>
  {/* Try changing MasterTheme to BlackTheme */}
  <pre>{JSON.stringify(MasterTheme, null, 2)}</pre>
</Box>
`

export default { code, inline: false }
