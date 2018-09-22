import {firebase, auth} from "./app";
import Notifier from '@/components/layouts/Notifier';
import stores from '@/stores';

const providers = {
    google: new firebase.auth.GoogleAuthProvider(),
}

let first = true;
auth.onAuthStateChanged( user => {
    if( user ) {
        stores.isLoggedIn = true;
    }   else    {
        stores.isLoggedIn = false;
        if (!first) {
            Notifier.notify("You have been logged out.")
        }
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