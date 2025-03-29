import { useContext } from "react"
import { Link } from "react-router"
import { UserContext } from "../../contexts/UserContext"
export function Navigation() {

    const { email } = useContext(UserContext);

    return (

        <nav className="shadow-md w-full p-4">
            <div className="flex justify-center space-x-6">
                <div className="relative group">
                    <Link to={'/'} className="text-gray-800 font-semibold text-lg hover:text-blue-500 transition duration-300 cursor-pointer">
                        Home
                    </Link>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></div>
                </div>
                <div className="relative group">
                    <Link to={'/caricatures'} className="text-gray-800 font-semibold text-lg hover:text-blue-500 transition duration-300 cursor-pointer">
                        Caricatures
                    </Link>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></div>
                </div>

                <div className="relative group">
                    <Link to={'/orders'} className="text-gray-800 font-semibold text-lg hover:text-blue-500 transition duration-300 cursor-pointer">
                        Custom Orders
                    </Link>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></div>
                </div>
                {email ? (
                    <>
                        <div className="relative group">
                            <Link to={'/createOrder'} className="text-gray-800 font-semibold text-lg hover:text-blue-500 transition duration-300 cursor-pointer">
                                Make your custom order
                            </Link>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></div>
                        </div>
                        <div className="relative group">
                            <Link to={'/profile'} className="text-gray-800 font-semibold text-lg hover:text-blue-500 transition duration-300 cursor-pointer">
                                Profile
                            </Link>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></div>
                        </div>
                        <div className="relative group">
                            <Link to={'/logout'} className="text-gray-800 font-semibold text-lg hover:text-blue-500 transition duration-300 cursor-pointer">
                                Logout
                            </Link>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </>
                ) : (
                    <>

                        <div className="relative group">
                            <Link to={'/login'} className="text-gray-800 font-semibold text-lg hover:text-blue-500 transition duration-300 cursor-pointer">
                                Login
                            </Link>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></div>
                        </div>



                        <div className="relative group">
                            <Link to={'/register'} className="text-gray-800 font-semibold text-lg hover:text-blue-500 transition duration-300 cursor-pointer">
                                Register
                            </Link>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </>

                )}
            </div>

        </nav>
    )

}