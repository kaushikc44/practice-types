import {createContext,ReactNode,useState,useContext} from "react";
import {User,AuthenticationPropType} from "../types/Profile.types";

const AuthenticatedContext = createContext<AuthenticationPropType | undefined >(undefined);

export function  useAuth() {
    const context = useContext(AuthenticatedContext);

    if(!context) {
        throw new Error("use Auth must be used within a Auth Provider");
    }

    if(context?.userData === undefined && context.isAuthenticated === true){
        throw new Error("The user is not signed in")
    }

    return context

}

interface Props{
    children:React.ReactNode
}

export function AuthProvider({children}:Props) {
    const [user,setUser] = useState<User | undefined>(undefined);
    const [isAuthenticated,setAuthenticated] = useState<boolean>(false);

    const login = (userData:User) => {
        setUser(userData);
        setAuthenticated(true);
    }

    const logout = () => {
        setAuthenticated(false);
        setUser(undefined);
    }

    return(
        <>
            <AuthenticatedContext.Provider value={{userData:user,isAuthenticated,login,logout}}>
                {children}
            </AuthenticatedContext.Provider>
        </>


    )
}