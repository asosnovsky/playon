import * as React from "react";
import { Route } from "react-router";
import { goTo, PAGES } from '@/components/router/history';
import applicatoinState from '@/stores';
import NewPlan from '@/components/elements/NewPlan';
import MainMenu from '@/components/elements/MainMenu';

export default class NewPlanPage extends Route {

    componentWillMount() {
        if (!applicatoinState.isLoggedIn) {
            goTo(PAGES.HOME)
        }
    }

    render() {
        return [
            <MainMenu key="menu"/>,
            <NewPlan key="item"/>
        ]
    }

}
