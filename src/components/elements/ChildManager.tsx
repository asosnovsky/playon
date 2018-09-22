import * as React from "react";
import * as moment from "moment";
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Button, TextField } from "@material-ui/core";
import ChildMaker from '@/components/elements/ChildMaker';

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
                <TableRow>
                <TableCell></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell></TableCell>
                </TableRow>
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
