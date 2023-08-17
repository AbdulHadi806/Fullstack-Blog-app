
export interface UserData {
    email: string;
    password: string;
}
export interface LoginResponse {
    data: {
        token: string;
        user: string;
    };
}
export interface UserDetails {
    aboutme:string;
    email: string;
    createdAt: string;
    user:string
}
