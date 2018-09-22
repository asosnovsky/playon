import * as React from "react";
import { Route } from "react-router";
import { Grid, Typography } from "@material-ui/core";

export default class IndexPage extends Route {

    render() {
        return <Grid container alignItems="center" justify="center"> 
            <Typography variant="headline">Home Page</Typography>
        </Grid>
    }

}
