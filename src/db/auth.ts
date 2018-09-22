import {firebase, auth} from "./app";
import Notifier from '@/components/layouts/Notifier';
import stores from '@/stores';

const providers = {
    google: new firebase.auth.GoogleAuthProvider(),
}
providers.google.addScope("public_profile")
providers.google.addScope("email")

auth.onAuthStateChanged( user => {
    if( user ) {
        stores.isLoggedIn = true;
    }   else    {
        stores.isLoggedIn = false;
    }
} )

// Methods
export function loginWithGoogle() {
    return auth.signInWithPopup(providers.google);
}
export function loginWithEmail(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password).then( () => {
        Notifier.notify("Welcome!");
    } ).catch( err => {
        console.warn(err);
        Notifier.notify("Login Failed!")
    } );
}
export function signupWithEmail(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password).then( () => {
        Notifier.notify("Welcome!");
    } ).catch( err => {
        console.warn(err);
        Notifier.notify("Signup Failed!")
    } );
}