import { FunctionComponent } from "react"
import { jsx } from "@emotion/core"

// List

export interface ListProps {
  as?: "ol" | "ul"
}

export const List: FunctionComponent<ListProps> = ({
  as: Tag = "ul",
  ...props
}) => <Tag {...props} />

// List Item

export interface ListItemProps {}

export const ListItem: FunctionComponent<ListItemProps> = (props) => (
  <li {...props} />
)
