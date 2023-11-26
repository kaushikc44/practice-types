import { AuthProvider } from "../context/auth.context";
import Navbar from "./Navbar";

export default function DashBoard(){
    

    return (
        <>
            <AuthProvider>
                <Navbar />
            </AuthProvider>
        </>
    )
}