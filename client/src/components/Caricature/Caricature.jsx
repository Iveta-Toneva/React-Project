import {  useParams } from "react-router"
import { useCaricature } from './.././../api/caricaturesApi'

export function Caricature() {

    const { id } = useParams();
    
    const { caricature } = useCaricature(id);
    

    return (
        <>
            <div className="max-w-2xl mx-auto p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8">
                <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight mb-3">{caricature.title}</h1>

                <div className="mb-3">
                    <img
                        src={caricature.img}
                        alt={caricature.title}
                        className="w-full h-auto object-cover rounded-lg shadow-md mb-3"
                    />
                </div>

                <div className="text-base text-gray-700 mb-3">{caricature.description}</div>

            </div>
        </>

    )
}