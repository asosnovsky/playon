export const mockCategories:MetaActivityCategory[] = [
    {
        "name": "Swimming",
        "sub_cats": [
            "AL: Lifesaving Society Assistant Instructor",
            "AL: Swim Inst./Lifesaving Inst./Emergency First Aid Inst.",
            "Adapted Swim Lessons: Ultra 1-2",
            "Adapted Swim Lessons: Ultra 3-4",
            "Adult Swim 2",
            "Aquafit: Arthritis",
            "Bronze Cross",
            "Bronze Medallion and Emergency First Aid (CPR B)",
            "Bronze Star and Basic First Aid (CPR A)",
            "Guardian Swim 1",
            "Guardian Swim 2",
            "Guardian Swim 3",
            "Preschool Swim 1: Penguin",
            "Preschool Swim 2: Stingray",
            "Preschool Swim 3: Otter",
            "Ranger Patrol",
            "Rookie Patrol",
            "SPLASH: 27 WEEK PROGRAM",
            "Swim Lessons - Private",
            "Tiny Tots Swim",
            "Ultra Swim 1 - Small Group",
            "Ultra Swim 2 - Small Group",
            "Ultra Swim 3 - Small Group",
            "Ultra Swim 4 - Small Group",
            "Ultra Swim 5 - Small Group",
            "Ultra Swim 6 - Small Group",
            "Ultra Swim 7 - Small Group",
            "Ultra Swim 8 - Small Group",
            "Ultra Swim 9 - Small Group"
        ]
    },
    {
        "name": "General",
        "sub_cats": [
            "After-School Program",
            "Cooking",
            "Club: Girls",
            "Recreation Adventures",
            "Recreation Discovery",
            "Club: Chess",
            "Recreation Discovery with Caregiver",
            "Recreation Adventures with Caregiver",
            "Recreation Adventures with caregiver"
        ]
    },
    {
        "name": "Sports",
        "sub_cats": [
            "PLAY! Ball Hockey",
            "PLAY! Basketball",
            "Karate: Beginner - White Belt",
            "Karate: Intermediate/Advanced",
            "PLAY! Pickleball",
            "PLAY! Soccer",
            "Start to PLAY! Soccer",
            "Cheerleading",
            "Start to PLAY! Ball Hockey with Caregiver",
            "Ready, Set, PLAY!",
            "SKILLS! Ball Hockey",
            "SKILLS! Basketball",
            "Badminton with Family",
            "SKILLS! Soccer",
            "Gymnastics: Tumbling",
            "SKILLS! Volleyball",
            "Gymnastics: Tumbling Level 1 to 4",
            "Pickleball: Recreational",
            "Learn to Bike - private"
        ]
    },
    {
        "name": "Arts",
        "sub_cats": [
            "Dance: Ballet",
            "Dance: Ballet - Advanced",
            "Dance: Hip Hop",
            "Drama",
            "Young Artist",
            "Dance: Jazz",
            "Music: Guitar - Private",
            "Dance: Hip Hop - Advanced",
            "Dance: Hip Hop - Beginner (Boys)",
            "Dance: Line Dance",
            "Music: Singing - Private",
            "Photography",
            "Art Club",
            "Dance: Line Dance - Advanced",
            "Drawing",
            "Crafty Creations",
            "Crafty Creations with Caregiver",
            "Jewellery Making",
            "Dance: Dance Basics"
        ]
    },
    {
        "name": "Fitness",
        "sub_cats": [
            "Cardio Mix (Women)",
            "Pilates - Beginner",
            "Yoga: Hatha",
            "Osteo Fit"
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