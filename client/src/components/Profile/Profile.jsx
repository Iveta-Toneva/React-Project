import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useProfile } from "../../api/profileApi";
import { format } from "../../../utils/timeFormat";


export function Profile() {

    const { accessToken, _id } = useContext(UserContext);
    const { user } = useProfile(accessToken);
    const [customOrders, setCustomOrders] = useState();

    useEffect(() => {
        fetch(`http://localhost:3030/data/customCaricatures?where=_ownerId%3D%22${encodeURIComponent(_id)}%22`)
            .then(res => res.json())
            .then(setCustomOrders)
    }, [])

    return (
        <>
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-2xl w-96 mx-auto mt-12 transform transition-transform hover:scale-105 hover:shadow-3xl">

                <div className="relative mb-8">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUBgj6AY3MpVAslZVY2gcUTJNHflSiZYaxA&s"
                        alt="Profile"
                        className="w-40 h-40 rounded-full border-8 border-indigo-500 shadow-2xl transform transition-transform hover:scale-110 hover:rotate-6"
                    />
                </div>

                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-800">{user.email}</h1>
                    <h2 className="text-xl text-gray-600 mt-2">{user.username}</h2>
                </div>
            </div>

            {customOrders && (
                <div className="mt-12 space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fadeIn">Your Orders:</h2>


                    {customOrders.map((order) => (
                        <div key={order._id} >
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

                            </div>

                        </div>
                    ))}

                </div>
            )}

        </>
    )



}