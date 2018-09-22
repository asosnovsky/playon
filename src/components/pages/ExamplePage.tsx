import * as React from "react";
import { Route } from "react-router";
import { Grid } from "@material-ui/core";

export default class ExamplePage extends Route {

    render() {
        return <Grid container alignItems="center" justify="center"> 
            <Grid item xs={12}>
                Hello All!
            </Grid>
        </Grid>
    }

}
