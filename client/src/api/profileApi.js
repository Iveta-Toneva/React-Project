import { useEffect, useState } from "react"
import { request } from "../requester/requester"

export const useProfile = (token) => {

    const [user, setUser] = useState({});
    useEffect(() => {
        request('GET', `http://localhost:3030/users/me`, null, token)
            .then(setUser)
    },[])

    return { user };
    
}   

