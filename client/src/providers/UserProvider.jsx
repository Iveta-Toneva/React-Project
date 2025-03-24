import { usePersistedState } from "../hooks/usePersistedState";
import { UserContext } from "../contexts/UserContext";
export function UserProvider({
    children,
}) {

    const [authData, setAuthData] = usePersistedState({});

    const loginHandler = (data) => {
        setAuthData(data)
    }

    const logoutHandler = () => {
        setAuthData({});
    }

    return (

        <UserContext.Provider value={{ ...authData, loginHandler, logoutHandler }}>
            {children}
        </UserContext.Provider>
    )
}