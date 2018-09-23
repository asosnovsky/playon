import * as React from "react";
import { List, ListItem, Checkbox, ListItemText, Collapse, ListItemIcon, ListItemSecondaryAction, Typography } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { mockCategories } from '@/db/mock';
import { SelectedActivityTypes } from '@/components/elements/NewPlan/typings';

class Category extends React.Component<MetaActivityCategory & { 
    onSelect: (cat: string) => void; 
    selected: SelectedActivityTypes[];
}, {open: boolean}> {
    state = { open: false };
    render = () => {
        const isSelected = this.props.selected.findIndex( v => v.cat === this.props.name ) > -1;
        return [
            <ListItem button key={this.props.name} onClick={ () => this.props.onSelect(this.props.name) }
                style={{
                    backgroundColor: isSelected ? "rgba(0, 0, 0, 0.14)" : "transparent"
                }}
            >
                <ListItemText inset primary={this.props.name} />
                <ListItemSecondaryAction>
                    <Checkbox
                        checked={isSelected}
                        tabIndex={-1}
                        disableRipple
                        style={{ height: "100%" }}
                    />
                </ListItemSecondaryAction>
            </ListItem>,
            // <Collapse in={this.state.open} unmountOnExit>
            //     <List dense component="div" disablePadding>
            //         {this.props.sub_cats.map( subcat => {
            //             const isSelected = this.props.selected.findIndex( v => v.cat === this.props.name && v.subcat === subcat ) > -1;
            //             return <ListItem key={subcat} button onClick={() => this.props.onSelect( this.props.name, subcat )}
            //                 style={{
            //                     backgroundColor: isSelected  ? "rgba(0, 0, 0, 0.14)" : "transparent"
            //                 }}
            //             >
            //                 <ListItemText inset secondary={subcat} />
            //                 <ListItemSecondaryAction>
            //                     <Checkbox
            //                         checked={isSelected}
            //                         tabIndex={-1}
            //                         disableRipple
            //                         style={{ height: "100%" }}
            //                         onClick={() => this.props.onSelect( this.props.name, subcat )}
            //                     />
            //                 </ListItemSecondaryAction>
            //             </ListItem> 
            //         })}
            //     </List>
            // </Collapse>
        ]
    }
}

export default function Categories(props: { 
    onSelect: (main: string) => void; 
    selected: SelectedActivityTypes[];
}) {
    return <List dense component="nav" disablePadding>
        {mockCategories.map( cat => <Category key={cat.name} {...cat} selected={props.selected} onSelect={ props.onSelect }/> )}
    </List>
}