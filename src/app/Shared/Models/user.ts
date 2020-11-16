
 export interface User {
    _id: string;
    name: string;
    email: string;
    mobile: string;
    handle?: string;
    description?: string;
    interests?: string[];
    dob?: string;
    showInterests?: boolean;
    showAge?: boolean;
    showDisplayPicture?: boolean;
    showDescription?: boolean;
}