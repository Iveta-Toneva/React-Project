import { useState, useEffect } from "react"
import { CaricatureItem } from "../CaricatureItem/CaricatureItem";
export function Caricatures() {
    const [caricatures, setCaricatures] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3030/data/caricatures')
            .then(res => res.json())
            .then(caricatures => setCaricatures(caricatures));
    }, [])


    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {caricatures.map(caricature => <CaricatureItem key={caricature._id} item={caricature} />)}
        </div >
    )
}