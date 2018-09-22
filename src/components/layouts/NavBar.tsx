import * as React from "react";

import { state as sidebarstate } from "./SideBar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, DialogContent, DialogTitle } from "@material-ui/core";
import { state, PAGES, goTo } from "@/components/router/history";
import { observer } from "mobx-react";
import { computed, toJS, observable } from "mobx";
import LinkIcon from "@material-ui/icons/Adjust";

const internalState = observable({
    showQR: false,
    customHeader: "",
})

@observer
export default class NavBar extends React.Component<{}> {

    static setCustomHeader(header: string) {
        internalState.customHeader = header;
    }

    @computed get title() {
        if ( internalState.customHeader !== "" ) {
            return internalState.customHeader;
        }
        switch(state.currentPage) {
            case PAGES.HOME: return ""
            default:
                return state.currentPage;
        }
    }
    render() {
        return <AppBar position="sticky" color="primary">
            <Toolbar>
                <Button color="inherit" onClick={_ => sidebarstate.isOpen = true}>☰</Button>
                <Typography color="inherit" variant="title">
                    {this.title}
                </Typography>
            </Toolbar>
        </AppBar>
    }
}

