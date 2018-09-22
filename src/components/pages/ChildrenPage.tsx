import * as React from "react";
import { Route } from "react-router";
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, Button, TextField } from "@material-ui/core";
import ChildManager from '@/components/elements/ChildManager';
import applicatoinState from '@/stores';
import { goTo, PAGES } from '@/components/router/history';
import MainMenu from '@/components/elements/MainMenu';

export default class ChildrenPage extends Route {
    componentWillMount() {
        if (!applicatoinState.isLoggedIn) {
            goTo(PAGES.HOME)
        }
    }
    render() {
        return [
            <MainMenu key="menu"/>,
            <ChildManager key="item"/>
        ]
    }

}
