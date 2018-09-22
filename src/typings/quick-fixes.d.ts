declare var require: any
declare module "react-agenda";

interface AgendaItem {
    _id           : string;
    name          : string;
    startDateTime : Date;
    endDateTime   : Date;
}