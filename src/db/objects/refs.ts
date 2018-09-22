import * as app from "@/db/app";

export const parents        = app.database.ref("/parents");
export const children       = app.database.ref("/children");
export const activities     = app.database.ref("/activities");
export const institutions   = app.database.ref("/institutions");