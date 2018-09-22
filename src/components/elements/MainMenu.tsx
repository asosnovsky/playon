import * as React from "react";
import { Button, Grid } from '@material-ui/core';
import { goTo, PAGES, historyState } from '@/components/router/history';
import Notifier from '@/components/layouts/Notifier';

export default class MainMenu extends React.Component {

    render() {
        return <Grid container justify="space-around" alignItems="center" alignContent="space-between">
            <Grid item xs={3}><Button fullWidth variant="outlined" color={ historyState.currentPage === PAGES.HOME ? "primary" : "default" } onClick={() => goTo(PAGES.HOME)}>Agenda</Button></Grid>
            <Grid item xs={3}><Button fullWidth variant="outlined" color={ historyState.currentPage === PAGES.CHILD_MGMT ? "primary" : "default" } onClick={() => goTo(PAGES.CHILD_MGMT)}>Children</Button></Grid>
            <Grid item xs={3}><Button fullWidth variant="outlined" color={ historyState.currentPage === PAGES.NEW_PLAN ? "primary" : "default" } onClick={() => goTo(PAGES.NEW_PLAN)}>+ Plan</Button></Grid>
            {/* <Grid item xs={3}><Button fullWidth variant="outlined" onClick={() => Notifier.notify("WIP")}>My Day</Button></Grid> */}
        </Grid>
    }

}
