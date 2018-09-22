interface Activity {
    act_id: UUID;
    int_id: UUID;
    category: string;
    sub_category: string;
    location: {
        lat: number; 
        long: number;
        address: string;
        postal_code: string;
    };
    hours: { start: Time; end: Time; };
    date: DateObject;
    contact_info: {
        email?: string; 
        phone?: string;
        name?: string;
    };
    age_range: {
        min: number; max: number;
    };
}

interface Institution {
    int_id: UUID;
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
    child_id: UUID;
    name: string;
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