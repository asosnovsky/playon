import * as React from "react";
import { Router, Switch, Route } from "react-router";

import { history } from "./history";

import NavBar from "@/components/layouts/NavBar";
import ErrorBoundary from "@/components/layouts/ErrorBoundary";
import Notifier from '@/components/layouts/Notifier';
import SideBar from "@/components/layouts/SideBar";

import { PAGES } from "@/components/router/routes.enums";
import NotFoundPage from '@/components/pages/NotFoundPage';
import ExamplePage from '@/components/pages/ExamplePage';
import IndexPage from '@/components/pages/IndexPage';

export default class AppRouter extends React.Component {
    public render() {
        return (
            <ErrorBoundary>
                <NavBar />
                <SideBar/>
                <ErrorBoundary>
                    <div style={{ marginTop: "5%" }}>
                        <Router history={history}>
                            <Switch>
                                <IndexPage path={PAGES.HOME} exact/>

                                <ExamplePage path={"/example"}/>
                                <NotFoundPage path="*"/>
                            </Switch>
                        </Router>
                    </div>
                </ErrorBoundary>
                <Notifier/>
            </ErrorBoundary>
        );
    }
}
