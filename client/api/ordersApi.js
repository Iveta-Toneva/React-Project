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