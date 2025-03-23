import { useEffect, useState } from "react";
import { request } from "../requester/requester";

const baseUrl = 'http://localhost:3030/data/caricatures';


export const useCaricatures = () => {

    const [caricatures, setCaricatures] = useState([]);

    useEffect(() => {
        request('GET', baseUrl)
            .then(setCaricatures);
    }, []);

    return { caricatures };
}

export const useCaricature = (id) => {

    const [caricature, setCaricature] = useState({});

    useEffect(() => {
        request('GET', `${baseUrl}/${id}`)
            .then(setCaricature);
    }, []);

    return { caricature };

}