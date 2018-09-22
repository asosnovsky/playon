import * as React from "react";
import * as moment from 'moment';
import { Card, CardHeader, CardContent, List, ListItem, Checkbox, ListItemText } from '@material-ui/core';
import applicatoinState from '@/stores';

interface IProps {
}
interface IState {
    childrenSelected: UUID[];
    activityTypes: Array<{
        cat: string; subcat: string;
    }>;
    dateFrom: moment.Moment;
    dateTo: moment.Moment;
}

function ChildSelector(props: { selected: UUID[]; onSelect: (c: Child) => void; }) {
    console.log(props.selected)
    return <List dense>
    {applicatoinState.children.map( child => (
      <ListItem
        key={child.child_id}
        role={undefined}
        dense
        button
        selected={props.selected.indexOf(child.child_id) > -1}
        onClick={() => props.onSelect(child)}
      >
        <Checkbox
          checked={props.selected.indexOf(child.child_id) > -1}
          tabIndex={-1}
          disableRipple
          style={{ height: "100%" }}
        />
        <ListItemText primary={child.name} />
        {props.selected.indexOf(child.child_id)}
      </ListItem>
    ))}
  </List>
}

export default class NewPlan extends React.Component<IProps,IState> {
    state: IState = { childrenSelected: [], activityTypes: [], dateFrom: moment(), dateTo: moment().add(7, "days") }
    render() {
        const {state} = this;
        return <Card>
            <CardHeader title="New Weekly Plan"/>
            <CardContent>
                <ChildSelector selected={state.childrenSelected} onSelect={ child => {
                    const selectedIdx = state.childrenSelected.indexOf(child.child_id);
                    if ( selectedIdx > -1) {
                        const newSel = [...state.childrenSelected];
                        newSel.splice(selectedIdx, 1);
                        return this.setState({
                            childrenSelected: newSel,
                        })
                    }   else    {
                        return this.setState({
                            childrenSelected: state.childrenSelected.concat([child.child_id])
                        })
                    }
                } }/>
            </CardContent>
        </Card>
    }

}
