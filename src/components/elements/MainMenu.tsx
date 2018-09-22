import * as React from "react";
import { AppBar, Button, Grid } from '@material-ui/core';

export default class MainMenu extends React.Component {

    render() {
        return <Grid container justify="space-around" alignItems="center" alignContent="space-between">
            <Grid item xs={3}><Button fullWidth variant="outlined">Children</Button></Grid>
            <Grid item xs={3}><Button fullWidth variant="outlined">+ Plan</Button></Grid>
            <Grid item xs={3}><Button fullWidth variant="outlined">My Day</Button></Grid>
        </Grid>
    }

}
