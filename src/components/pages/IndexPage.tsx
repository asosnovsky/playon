import * as React from "react";
import * as moment from "moment";
import { Route } from "react-router";
import { Grid, Typography } from "@material-ui/core";
import { observer } from 'mobx-react';
import stores from '@/stores';
import Login from '@/components/elements/Login';
import MainMenu from '@/components/elements/MainMenu';
import CurrentAgenda from '@/components/elements/CurrentAgenda';

@observer
export default class IndexPage extends Route {

    innerChild() {
        if (stores.isLoggedIn) {
            return [
                <MainMenu key="menu"/>,
                <CurrentAgenda key="agenda" />
            ]
        }   else    {
            return <Login/>
        }
    }

    render() {
        return <Grid container alignItems="center" justify="center"> 
            {this.innerChild()}
        </Grid>
    }

}
