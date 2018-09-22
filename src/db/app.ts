import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import * as secrets from "secrets";

const app = firebase.initializeApp(secrets.firebase)

export default app;
export const database = app.firestore();
export const auth = app.auth();
export {firebase};