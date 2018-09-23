import * as React from "react";
import applicatoinState from '@/stores';
import { List, Checkbox, ListItemText, ListItem } from '@material-ui/core';

export default function ChildSelector(props: { selected: UUID[]; onSelect: (c: Child) => void; }) {
    return <List dense>
    {applicatoinState.children.map( child => (
      <ListItem
        key={child.child_id}
        role={undefined}
        dense
        button
        onClick={() => props.onSelect(child)}
        style={{
            backgroundColor: props.selected.indexOf(child.child_id) > -1 ? "rgba(0, 0, 0, 0.14)" : "transparent"
        }}
      >
        <Checkbox
          checked={props.selected.indexOf(child.child_id) > -1}
          tabIndex={-1}
          disableRipple
          style={{ height: "100%" }}
        />
        <ListItemText primary={child.name} />
      </ListItem>
    ))}
  </List>
}