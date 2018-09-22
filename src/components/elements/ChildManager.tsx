import * as React from "react";
import * as moment from "moment";
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Button, TextField } from "@material-ui/core";
import ChildMaker from '@/components/elements/ChildMaker';
import applicatoinState from '@/stores';

interface IProps {

}
interface IState {
    openChildMaker: boolean;
}
export default class ChildManager extends React.Component<IProps, IState> {
    state:IState = { openChildMaker: false };
    render() {
        const { state } = this;
        return <Grid container alignItems="center" justify="center"> 
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {applicatoinState.children.map( child => <TableRow key={child.child_id}>
                    <TableCell></TableCell>
                    <TableCell>{child.name}</TableCell>
                    <TableCell>{moment(`${child.date_of_birth.year}-${String(child.date_of_birth.month).padStart(2, "0")}-${String(child.date_of_birth.day).padStart(2, "0")}`, "YYYY-MM-DD").format("d-MM/yy")}</TableCell>
                    <TableCell></TableCell>
                </TableRow>)}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                        <Button onClick={ () => this.setState({ openChildMaker: true })}>Add New Child</Button>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
        <ChildMaker open={state.openChildMaker} onClose={ () => this.setState({ openChildMaker: false })}/>
    </Grid>
    }

}
