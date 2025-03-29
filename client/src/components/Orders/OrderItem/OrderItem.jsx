import { useContext } from "react";
import { format } from "../../../../utils/timeFormat";
import { UserContext } from "../../../contexts/UserContext";
import { Link } from "react-router";

export function OrderItem({
    order
}) {
    const { _id, username } = useContext(UserContext);


    return (

        <div className="flex items-center max-w-5xl rounded-lg overflow-hidden shadow-xl bg-white hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer mb-6">

            <div className="w-64 h-64 flex-shrink-0">
                <img
                    className="w-full h-full object-contain"
                    src={order.img}
                    alt={order.title}
                />
            </div>


            <div className="p-8 flex-1">
                <div className="text-3xl font-semibold text-gray-800">
                    {order.title}
                </div>
                <div className="mt-3 text-xl text-gray-600">Username: {order.username}</div>
                <div className="mt-3 text-lg text-gray-600">
                    Description: {order.description}
                </div>
                <div className="mt-3 text-lg text-gray-600">
                    Ordered placed on: <span className="text-gray-500">{format(new Date(order._createdOn), 'MMMM dd, yyyy')}</span>
                </div>
            </div>

            {_id === order._ownerId && <div className="flex flex-col justify-center p-6 space-y-6">

                <Link to={`/edit/${order._id}`} className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 transform hover:scale-105 cursor-pointer">
                    Edit
                </Link>


                <Link to={`/delete/${order._id}`} className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 transform hover:scale-105 cursor-pointer">
                    Delete
                </Link>
            </div>}

        </div>
    )

}