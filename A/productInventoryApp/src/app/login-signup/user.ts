export interface User {
    id: number;
    emailId: string;        // this will be used for id value in JSON-SERVER
    password: string;
    firstName: string;
    lastName: string;
    location: string;
    mobileNumber: number;
}
