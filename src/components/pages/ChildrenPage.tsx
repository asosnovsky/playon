import * as React from "react";
import { Route } from "react-router";
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Button, TextField } from "@material-ui/core";
import ChildManager from '@/components/elements/ChildManager';

export default class ChildrenPage extends Route {

    render() {
        return <ChildManager/>
    }

}
