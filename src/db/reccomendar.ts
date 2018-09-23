import * as moment from "moment";
import { activities } from '@/db/objects';

export interface SelectedActivityTypes {
    cat: string; subcat: string;
};
export interface ReccomendActivityProps {
    ages: {min: number; max: number};
    activityTypes: SelectedActivityTypes[];
    dateFrom: moment.Moment;
    dateTo: moment.Moment;
    budgetLimit: number;
}

//Todo: pull from db correctly!
let allData: Activity[] = require("./activities.json")
export async function reccomendActivity(data: ReccomendActivityProps) {
    if (!allData) {
        allData = []
        const datas = await activities.get();
        datas.docs.forEach( doc => {
            const rawData = doc.data() as RawActivity;
            const weekday = moment(`${rawData.date_year}-${String(rawData.date_month).padStart(2, "0")}-${String(rawData.date_day).padStart(2, "0")}`).weekday();
            const minAge = isNaN(rawData.min) ? 10 : Number(rawData.min);
            allData.push({
                category: rawData.category,
                sub_category: rawData.sub_category,
                contact_info: rawData.contact_info,
                weekday,
                startTime: {
                    hour: Number(rawData.start_hour),
                    min: Number(rawData.start_min),
                },
                endTime: {
                    hour: Number(rawData.end_hour),
                    min: Number(rawData.end_min),
                },
                age_range: {
                    min: minAge,
                    max: isNaN(rawData.max) ? minAge : Number(rawData.max),
                }
            })
        } )
    }
    console.log(allData)
    return allData.filter( doc => {
        const correctActive = data.activityTypes.filter( act => {
            return act.cat === doc.category
        } ).length > 0
        if (correctActive) {
            const requestedMinAge = data.ages.min;
            const requestedMaxAge = data.ages.max;
            const correctAge = (requestedMinAge >= doc.age_range.min && requestedMinAge <= doc.age_range.max) ||
                               (requestedMaxAge >= doc.age_range.min && requestedMaxAge <= doc.age_range.max) ;
            return correctAge;
        }
        return false;
    } )
}
