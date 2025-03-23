const baseUrl = 'http://localhost:3030/users'
import { request } from "../requester/requester"

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

