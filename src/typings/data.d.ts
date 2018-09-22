interface Activity {
    act_id: string;
    int_id: string;
    category: string;
    sub_category: string;
    location: {
        lat: number; 
        long: number;
        address: string;
        postal_code: string;
    };
    hours: {
        start: { hour: number; min: number;  };
        end: { hour: number; min: number;  };
    };
    date: {
        day: number; month: number; year: number;
    };
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
    int_id: string;
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
    child_id: string;
    name: string;
    date_of_birth: { day: number; month: number; year: number; };
}

interface Parent {
    parent_id: string;
    name: string;
    children: Array<string>;
}

interface AssignedActivity {
    child_id: string;
    act_id: string;
    date_set: number;
}

interface ActivityRating {
    act_id: string;
    inst_id: string;
    rating: number;
    text: string;
}