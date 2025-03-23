import { Navigate } from 'react-router';
import { useLogout } from '../../api/authApi'


export function Logout() {

    const { isLoggedOut } = useLogout();

    return isLoggedOut
        ? <Navigate to="/" />
        : <></>

}