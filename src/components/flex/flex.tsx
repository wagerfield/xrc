import { FC } from "react"
import { css, jsx } from "@emotion/core"
import { FlexProps } from "./flex.types"

const styles = (props: FlexProps) => css`
  display: ${props.display};

  width: 100%;
  height: 100%;

  background: red;
`

export const Flex: FC<FlexProps> = (props) => {
  return <div css={styles(props)}>{props.children}</div>
}

Flex.defaultProps = {
  display: "flex"
}
