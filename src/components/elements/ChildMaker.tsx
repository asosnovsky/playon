import * as React from "react";
import * as moment from "moment";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';
import Notifier from '@/components/layouts/Notifier';
import applicatoinState from '@/stores';

interface IProps {
    open: boolean;
    onClose: () => void;
}
interface IState {
    newName: string;
    newDob: moment.Moment;
}
export default class ChildMaker extends React.Component<IProps, IState> {
    state:IState = { newName: "", newDob: moment().subtract(10, "years") };

    render() {
        const { props, state } = this;
        return <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Add New Child Information</DialogTitle>
            <DialogContent>
                <TextField label="Name" placeholder="Name" value={state.newName} onChange={ e => this.setState({ newName: e.currentTarget.value })}/>
                <TextField type="date" label="Date of Birth" value={state.newDob.format("YYYY-MM-DD")} onChange={ e => {
                        this.setState({ newDob: moment(e.currentTarget.value, "YYYY-MM-DD") })
                }}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button onClick={() => {
                    if (state.newName.length < 2) {
                        return Notifier.notify("Please enter valid name");
                    }
                    if (Math.abs(state.newDob.diff(moment(), "y")) > 25) {
                        console.error(state.newDob.diff(moment(), "y"))
                        return Notifier.notify("Please enter a valid age < 25");
                    }
                    applicatoinState.addChild({
                        name: state.newName,
                        date_of_birth: {
                            day: state.newDob.day() as Day,
                            month: state.newDob.month() as Month,
                            year: state.newDob.year(),
                        }
                    })
                }}>Add</Button>
            </DialogActions>
        </Dialog>
    }

}
