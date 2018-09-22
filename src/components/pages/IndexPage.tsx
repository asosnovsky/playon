import * as React from "react";
import { Route } from "react-router";
import { Grid, Typography } from "@material-ui/core";
import { observer } from 'mobx-react';
import stores from '@/stores';
import Login from '@/components/elements/Login';

@observer
export default class IndexPage extends Route {

    innerChild() {
        if (stores.isLoggedIn) {
            return <Typography variant="headline">Home Page</Typography>
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
