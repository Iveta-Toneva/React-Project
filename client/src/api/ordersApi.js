import { useEffect, useState } from "react"
import { request } from "../requester/requester";

const baseUrl = 'http://localhost:3030/data/customCaricatures';

export const useOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        request('GET', baseUrl)
            .then(setOrders)
    }, []);

    return { orders };
}

export const useOrder = (id) => {

    const [order, setOrder] = useState({});

    useEffect(() => {
        request('GET', `${baseUrl}/${id}`)
            .then(setOrder);
    }, []);

    return { order };

}

export const useCreateOrder = () => {

    const create = (data, token) => {
        return request('POST', baseUrl, data, token)
    }

    return { create }
}


export const useEditOrder = () => {
    const edit = (data, token, id) => {
        return request('PUT', `${baseUrl}/${id}`, data, token)
    }

    return { edit }
}

export const useDeleteOrder = (token, id) => {


    const [error, setError] = useState(null);
    const [isDeleted, setIsDeleted] = useState(false);
 
    useEffect(() => {
        request('DELETE', `${baseUrl}/${id}`, null, token)
            .then(() => {
                setIsDeleted(true);
            })
            .catch((err) => {
                setError(err);
            });
    }, [])

    return { error, isDeleted };
}

