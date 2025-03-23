import { useCaricatures } from "../../api/caricaturesApi";
import { CaricatureItem } from "./CaricatureItem/CaricatureItem";

export function Caricatures() {

    const { caricatures } = useCaricatures();

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {caricatures.map(caricature => <CaricatureItem key={caricature._id} item={caricature} />)}
        </div >
    )

}