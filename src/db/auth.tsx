import * as React from "react";
import {firebase, auth} from "@/db/app";
import Notifier from '@/components/layouts/Notifier';
import stores from '@/stores';
import { children, agendaItems } from '@/db/objects';
import { goTo, PAGES } from '@/components/router/history';
import { toJS } from 'mobx';
import HeadDialog from '@/components/layouts/HeadDialog';
import { Typography } from '@material-ui/core';

const providers = {
    google: new firebase.auth.GoogleAuthProvider(),
}

let first = true;
auth.onAuthStateChanged( async user => {
    if( user ) {
        stores.isLoggedIn = true;
        stores.userId = user.uid;
        stores.children = [];
        stores.agendaItems = [];
        const remoteChildrenObj = await children.where("parent_id", '==', user.uid).get();
        remoteChildrenObj.docs.forEach( doc => {
            stores.children.push({
                ...doc.data() as any,
                child_id: doc.id,
            });
        } );
        const remoteAgendaObj = await agendaItems.where("userId", '==', user.uid).get();
        remoteAgendaObj.docs.forEach( doc => {
            const data = doc.data() as any;
            stores.agendaItems.push({
                ...data,
                _id: doc.id,
                startDateTime: new Date(data.startDateTime.seconds * 1000),
                endDateTime: new Date(data.endDateTime.seconds * 1000),
            });
        } );
        if (stores.children.length === 0) {
            HeadDialog.notify(<Typography variant="body1" align="center">
                Hey, we noticed you haven't registered any children yet.
                Use the children tab to register them in the application!
            </Typography>)
        }
    }   else    {
        stores.isLoggedIn = false;
        stores.userId = null;
        if (!first) {
            Notifier.notify("You have been logged out.")
        }
        goTo(PAGES.HOME);
    }
    first = false;
} )

// Methods
export function logOut() {
    return auth.signOut();
}
export function loginWithGoogle() {
    return auth.signInWithPopup(providers.google);
}
export function loginWithEmail(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password).then( () => {
        Notifier.notify("Welcome!");
    } ).catch( err => {
        console.warn(err);
        Notifier.notify(err.message)
    } );
}
export function signupWithEmail(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password).then( () => {
        Notifier.notify("Welcome!");
    } ).catch( err => {
        console.warn(err);
        Notifier.notify(err.message)
    } );
}