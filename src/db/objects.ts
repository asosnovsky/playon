import * as app from "@/db/app";

export const parents        = app.database.collection("parents");
export const children       = app.database.collection("children");
export const activities     = app.database.collection("activities2");
export const agendaItems   = app.database.collection("agendaItems");