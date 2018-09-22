import * as React from "react";
import * as moment from "moment";
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Button, TextField } from "@material-ui/core";
import ChildMaker from '@/components/elements/ChildMaker';
import applicatoinState from '@/stores';
import ChildIcon from "@material-ui/icons/ChildCare";
import { observer } from 'mobx-react';

interface IProps {

}
interface IState {
    openChildMaker: boolean;
}

function getAge({day, month, year}: DateObject) {
    const dob = moment(`${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`, "YYYY-MM-DD");
    return moment().diff(dob, "years");
}
@observer
export default class ChildManager extends React.Component<IProps, IState> {
    state:IState = { openChildMaker: false };
    render() {
        const { state } = this;
        return <Grid container alignItems="center" justify="center"> 
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {applicatoinState.children.map( child => <TableRow key={child.child_id}>
                    <TableCell>{child.name}</TableCell>
                    <TableCell>{getAge(child.date_of_birth)}</TableCell>
                    <TableCell></TableCell>
                </TableRow>)}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell colSpan={1}>
                        <Button variant="outlined" color="primary" onClick={ () => this.setState({ openChildMaker: true })}>
                            <ChildIcon/>  +
                        </Button>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
        <ChildMaker open={state.openChildMaker} onClose={ () => this.setState({ openChildMaker: false })}/>
    </Grid>
    }

}
