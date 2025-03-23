const baseUrl = 'http://localhost:3030/users'
import { useContext, useEffect } from "react";
import { request } from "../requester/requester";
import { UserContext } from "../contexts/UserContext";

export const useRegister = () => {

    const register = (data) => {

        return request('POST', `${baseUrl}/register`, data);
    }

    return { register }
}


export const useLogin = () => {

    const login = (data) => {

        return request('POST', `${baseUrl}/login`, data);
    }

    return { login }
}


export const useLogout = () => {

    const { accessToken, logoutHandler } = useContext(UserContext);

    useEffect(() => {

        if (!accessToken) {
            return;
        }

        request('GET', `${baseUrl}/logout`, null, accessToken)
            .then(logoutHandler)

    }, [])

    return { isLoggedOut: !!accessToken };

}
