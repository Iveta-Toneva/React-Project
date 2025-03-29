import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { Navigate, Outlet } from "react-router";

export function GuestGuard() {

    const { email } = useContext(UserContext);
    

    if (email) {
       return <Navigate to={'/'} />
    }

    return (
        <Outlet />
    )
}