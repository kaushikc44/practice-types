export type User = {
    username:string;
    email:string;
    password:string;
    
}

export type AuthenticationPropType = {
    userData:User | undefined;
    isAuthenticated:boolean;
    login : (user:User) => void;
    logout : () => void;
}

