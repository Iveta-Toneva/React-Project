import { Link } from "react-router"
export function Error() {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 animate-gradient bg-cover bg-center m-10">
            <div className="text-center p-16 bg-yellow-50 rounded-lg shadow-xl max-w-6xl w-full mx-4 md:mx-16 mt-24 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <h1 className="text-9xl font-extrabold text-yellow-400 animate-bounce">404</h1>
                <h2 className="mt-4 text-5xl font-semibold text-gray-800">Oops! Page Not Found</h2>
                <p className="mt-4 text-xl text-gray-600 opacity-90">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="mt-6 text-7xl animate-pulse">🐱</div>

                <Link
                    to="/"
                    className="mt-8 inline-block px-10 py-4 text-white bg-gradient-to-r from-indigo-600 to-pink-600 rounded-md hover:bg-gradient-to-l hover:from-pink-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    )
}