import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

import secrets from "@/secrets/firebase.json";

const app = firebase.initializeApp(secrets)

export default app;
export const database = app.database();
export const auth = app.auth();