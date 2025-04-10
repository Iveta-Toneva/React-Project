import { Link } from 'react-router'
export function CaricatureItem(
    { item }
) {

    return (
        <div className="max-w-md rounded-lg overflow-hidden shadow-xl bg-white hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <img className="w-full h-72 object-contain" src={item.img} alt={item.title} />
            <div className="p-6">
                <div className="text-3xl font-semibold text-gray-800 truncate">{item.title}</div>
            </div>
            <div className="flex justify-between p-4 space-x-4">
                <Link to={`/details/${item._id}`} className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200 transform hover:scale-105 cursor-pointer">
                    Details
                </Link>
            </div>
        </div>
    )
}