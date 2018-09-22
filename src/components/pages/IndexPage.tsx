import * as React from "react";
import { Route } from "react-router";
import { Grid, Typography } from "@material-ui/core";
import { observer } from 'mobx-react';
import stores from '@/stores';
import Login from '@/components/elements/Login';
import Agenda from '@/components/elements/Agenda';
import MainMenu from '@/components/elements/MainMenu';

@observer
export default class IndexPage extends Route {

    innerChild() {
        if (stores.isLoggedIn) {
            return [
                <MainMenu key="menu"/>,
                <Agenda key="agenda"/>
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
