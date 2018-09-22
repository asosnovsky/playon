import * as app from "@/db/app";

export const parents        = app.database.collection("parents");
export const children       = app.database.collection("children");
export const activities     = app.database.collection("activities");
export const institutions   = app.database.collection("institutions");