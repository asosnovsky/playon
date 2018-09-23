interface RawActivity {
    address: string;
    category: string;
    sub_category: string;
    contact_info: string;
    date_day: Day;
    date_month: Month;
    date_year: number;
    end_hour: number;
    end_min: number;
    max: number;
    min: number;
    postal_code: string;
    start_hour: string;
    start_min: string;
    // act_id: UUID;
    // inst_id: UUID;
    // category: string;
    // sub_category: string;
    // location: {
    //     lat: number; 
    //     long: number;
    //     address: string;
    //     postal_code: string;
    // };
    // hours: { start: Time; end: Time; };
    // date: DateObject;
    // contact_info: {
    //     email?: string; 
    //     phone?: string;
    //     name?: string;
    // };
    // age_range: {
    //     min: number; max: number;
    // };
}

interface Activity {
    category: string;
    sub_category: string;
    weekday: number;
    contact_info: string;
    age_range: {
        min: number; max: number;
    };
    startTime: {
        hour: number;
        min: number;
    };
    endTime: {
        hour: number;
        min: number;
    };
}
interface Institution {
    inst_id: UUID;
    name: string;
    location: {
        lat: number; 
        long: number;
        address: string;
        postal_code: string;
    };
    contact_info: {
        email?: string; 
        phone?: string;
        name?: string;
    };
}

interface Child {
    child_id?: UUID;
    parent_id?: UUID;
    name: string;
    gender: string;
    date_of_birth: DateObject;
}

interface Parent {
    parent_id: UUID;
    name: string;
    children: Array<UUID>;
}

interface AssignedActivity {
    child_id: UUID;
    act_id: UUID;
    date_set: UnixSeconds;
}

interface ActivityRating {
    act_id: UUID;
    inst_id: string;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    text: string;
}

interface MetaActivityCategory {
    name: string;
    sub_cats: string[];
}