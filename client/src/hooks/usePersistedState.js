import { useState } from "react";

export const usePersistedState = (initialState) => {

    const [state, setState] = useState(() => {

        const auth = localStorage.getItem('auth');

        if (!auth) {
            return initialState;
        }

        const authData = JSON.parse(auth);
        return authData;
    });

    const setPersistedState = (auth) => {

        const authData = JSON.stringify(auth);
        localStorage.setItem('auth', authData);
        setState(auth);
    }

    return [
        state,
        setPersistedState
    ];

}