import { Moment } from "moment";

export interface SelectedActivityTypes {
    cat: string; subcat: string;
};

export interface NewData {
    childrenSelected: UUID[];
    activityTypes: SelectedActivityTypes[];
    dateFrom: Moment;
    dateTo: Moment;
    budgetLimit: number;
}