export const mockCategories:MetaActivityCategory[] = [
    {
        name: "Physical",
        sub_cats: [
            "Soccer", "Basketball"
        ]
    },
    {
        name: "Academic",
        sub_cats: [
            "Mathematics", "Reading Comprehension"
        ]
    }, 
    {
        name: "Creative",
        sub_cats: [
            "Drawing", "Reading"
        ]
    },
    {
        name: "Childcare",
        sub_cats: [
            "Developmental",
            "Behavioural",
            "No Disability"
        ]
    }
]

import * as moment from "moment";
export const mockAgendaItems: AgendaItem[] = [
    {
        name: "Soccer Practise",
        startDateTime : moment("2018-09-17 11:00", "YYYY-MM-DD HH:mm").toDate(),
        endDateTime : moment("2018-09-17 13:00", "YYYY-MM-DD HH:mm").toDate(),
    },
    {
        name: "Soccer Practise",
        startDateTime : moment("2018-09-18 11:00", "YYYY-MM-DD HH:mm").toDate(),
        endDateTime : moment("2018-09-18 13:00", "YYYY-MM-DD HH:mm").toDate(),
    },
    {
        name: "Soccer Practise",
        startDateTime : moment("2018-09-21 11:00", "YYYY-MM-DD HH:mm").toDate(),
        endDateTime : moment("2018-09-21 13:00", "YYYY-MM-DD HH:mm").toDate(),
    }
].map( (i, _id) => ({
    ...i,
    _id: String(_id)
}) )