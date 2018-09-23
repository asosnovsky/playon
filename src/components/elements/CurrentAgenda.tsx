import * as React from "react";
import * as moment from "moment";
import { Grid, Dialog, DialogTitle, DialogContent, TextField, NativeSelect, FormControl, InputLabel, Button, DialogActions } from "@material-ui/core";
import Agenda from '@/components/elements/Agenda';
import { mockAgendaItems } from '@/db/mock';
import Notifier from '@/components/layouts/Notifier';
import { observer } from 'mobx-react';
import applicatoinState from '@/stores';
import { toJS } from 'mobx';


interface IState {
    item?: AgendaItem;
}
function ItemDialog(props: { item?: AgendaItem; onClose: () =>void; }) {
    let passed = false;
    let name = "";
    if (props.item) {
        passed = moment().diff(moment(props.item.endDateTime), "days") > 0;
        name = props.item.name;
    }
    return <Dialog open={!!props.item} onClose={props.onClose} >
        <DialogTitle>{name}</DialogTitle>
        {passed &&<DialogContent>
            <TextField fullWidth label="Review" multiline />
            <FormControl fullWidth>
                <InputLabel htmlFor="ratings">Ratings</InputLabel>
                <NativeSelect inputProps={{ id: "ratings" }}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </NativeSelect>
            </FormControl>
            <Button onClick={() => {
                props.onClose()
                Notifier.notify("Thank you for the review!")
            }}>Submit</Button>
        </DialogContent>}
        {!passed &&<DialogContent>
            Once the activity is over, you will be able to review it.
        </DialogContent>}
        <DialogActions>
            <Button variant="outlined" color="default" onClick={props.onClose}>Cancel</Button>
            <Button variant="outlined" color="secondary" onClick={ async () => {
                await applicatoinState.removeAgenda(props.item._id);
                props.onClose();
            } }>Delete</Button>
        </DialogActions>
    </Dialog>
}
@observer
export default class CurrentAgenda extends React.Component<{},IState> {
    state:IState = {};
    render() {
        console.log(this.state)
        return <Grid container alignItems="center" justify="center"> 
            <Agenda 
                    maxDate={ moment().add(2, "months").toDate() }
                    startDate={ moment().toDate() }
                    items={toJS(applicatoinState.agendaItems)}
                    onSelect={ item => 
                        this.setState({ item })
                    }
            />
            <ItemDialog item={this.state.item} onClose={() => this.setState({item: undefined})}/>
        </Grid>
    }

}
