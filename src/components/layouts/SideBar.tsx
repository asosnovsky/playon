import * as React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {ListItem, IconButton} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ChildIcon from "@material-ui/icons/ChildCare";
import NewPlanIcon from "@material-ui/icons/Event";
import LogoutIcon from "@material-ui/icons/PowerOff";
import { goHomeOrBack, PAGES, goTo } from "@/components/router/history";
import stores from '@/stores';
import { auth } from '@/db';
import applicatoinState from '@/stores';

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
        { icon: <HomeIcon/>, page: PAGES.HOME, name: "Home" },
        { icon: <ChildIcon/>, page: PAGES.CHILD_MGMT, name: "Children", auth: true },
        { icon: <NewPlanIcon/>, page: PAGES.NEW_PLAN, name: "New Plan", auth: true },
    ]
    render() {
        return <Drawer open={state.isOpen} onClose={_ => state.isOpen = false}>
            <List>
                {this.links.filter( link => applicatoinState.isLoggedIn ? true : !link.auth ).map( (link, idx) => <ListItem key={idx}>
                    <IconButton onClick={this.goTo(link.page)}>
                        {link.icon}
                    </IconButton>
                </ListItem> )}
                {stores.isLoggedIn && <ListItem>
                    <IconButton onClick={() => auth.logOut()}>
                        <LogoutIcon/>
                    </IconButton>
                </ListItem>}
            </List>
        </Drawer>
    }
}