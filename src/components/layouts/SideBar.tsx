import * as React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {ListItem, IconButton} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Home from "@material-ui/icons/Home";
import { goHomeOrBack, PAGES, goTo } from "@/components/router/history";

export const state = observable({isOpen: false});

@observer
export default class extends React.Component {
    goTo = (path: PAGES, master: boolean = true) => {
        return () => {
            state.isOpen = false;
            if (path === PAGES.HOME && !master) {
                goHomeOrBack();
            }else{
                goTo(path)
            }
        }
    }
    links = [
        { icon: <Home/>, page: PAGES.HOME, },
    ]
    render() {
        return <Drawer open={state.isOpen} onClose={_ => state.isOpen = false}>
            <List>
                {window.location.pathname !== PAGES.HOME && <ListItem>
                    <IconButton onClick={this.goTo(PAGES.HOME, false)}>
                        <ArrowBack/>
                    </IconButton>
                </ListItem>}
                {this.links.map( (link, idx) => <ListItem key={idx}>
                    <IconButton onClick={this.goTo(link.page)}>
                        {link.icon}
                    </IconButton>
                </ListItem> )}
            </List>
        </Drawer>
    }
}