"use client"

import Login from "../../../components/login"
import {AuthProvider} from "../../../context/auth.context"


export default function LoginMain() {

    return(
        <>
        <div className="bg-black">
            <AuthProvider >
                <div className="flex flex-row items-center justify-center min-h-screen">
                    <div className="">
                        <Login />
                    </div>
                </div>
            </AuthProvider>
        </div>
       
        </>
    )

}