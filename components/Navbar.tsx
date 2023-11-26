import { useAuth } from "../context/auth.context"

export default function Navbar(){
    const user = useAuth();
    console.log(user)

    return (
        <>
        <div className="grid grid-cols-2 gap-4 ">
            <div className=" border-2 flex flex-row">
                <div>
                    <h1>Home</h1>
                </div>
                <div>
                    About
                </div>
                <div>
                    Contact
                </div>
            </div>
            <div>
                <h1>{user.userData?.username}</h1>
            </div>
        </div>
        </>
    )
}