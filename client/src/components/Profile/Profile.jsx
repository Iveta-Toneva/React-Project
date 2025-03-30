import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useProfile } from "../../api/profileApi";
import { format } from "../../../utils/timeFormat";
import { Link } from "react-router";


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
            <div className="container max-w-7xl mx-auto p-8 bg-white rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl m-20">


                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">


                    <div className="flex-shrink-0 w-40 h-40 bg-gray-200 rounded-full border-8 border-indigo-500 shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                        <img
                            src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>


                    <div className="text-center md:text-left md:w-2/3 space-y-4">
                        <h1 className="text-3xl font-semibold text-gray-800 animate__animated animate__fadeInUp">{user.email}</h1>
                        <p className="text-gray-600 text-lg opacity-80">{user.username}</p>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center animate__animated animate__fadeInUp">
                        Your Orders 🛍️🎉
                    </h2>


                    {customOrders && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {customOrders.map((order) => (
                                <div
                                    key={order._id}
                                    className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-32 h-32 flex-shrink-0">
                                            <img
                                                className="w-full h-full object-contain rounded-lg"
                                                src={order.img}
                                                alt={order.title}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">{order.title}</h3>
                                            <p className="text-gray-500">Placed on {format(order._createdOn)}</p>
                                            <p className="text-gray-600 mt-2">Status: <span className="font-bold text-indigo-500">Shipped 🚚</span></p>
                                        </div>
                                    </div>

                                </div>

                            ))}
                        </div>

                    )}

                </div>
                <div className="m-10 text-center p-10">
                    <Link
                        to={'/caricatures'}
                        className="mt-4 px-10 py-4 text-xl bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none transform transition-all duration-300"
                    >
                        Explore more 👀
                    </Link>
                </div>
            </div>
        </>
    );




}