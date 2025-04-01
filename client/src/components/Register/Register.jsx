import { useContext, useState } from "react"
import './Register.css'
import { useRegister } from "../../api/authApi";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";

export function Register() {

    const { register } = useRegister();
    const { loginHandler } = useContext(UserContext);
    const navigate = useNavigate();
    const [serverError, setServerError] = useState(null);

    const [values, setValues] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const validate = () => {

        const newErrors = {};

        if (!values.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            newErrors.email = "Email is not valid.";
        }


        if (!values.username) {
            newErrors.username = "Username is required.";
        }


        if (!values.password) {
            newErrors.password = "Password is required.";
        } else if (values.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }


        if (!values.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password.";
        } else if (values.password !== values.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        return newErrors;
    };

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const registerHandler = async (e) => {

        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors);
            return;
        }

        const response = await register(values);

        if (response.code === 409) {
            setServerError(response.message);
            return;
        }
        
        const { email, accessToken, username, _id } = response;

        loginHandler({ email, accessToken, username, _id });
        navigate('/');

    }

    return (
        <>
            {serverError && (
                <div className="fixed top-15 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg max-w-xs text-center z-50 animate-toast-show">
                    <p>{serverError}</p>
                </div>
            )}
            <form onSubmit={registerHandler} className="mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6 mt-20">
                <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Enter your email"
                        onChange={onChangeHandler}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Enter your username"
                        onChange={onChangeHandler}
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Enter your password"
                        onChange={onChangeHandler}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-700">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Confirm your password"
                        onChange={onChangeHandler}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <div className="flex justify-center">
                    <input
                        type="submit"
                        value='Register'
                        className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200 transform hover:scale-105"
                    />
                </div>
            </form>
        </>

    )
}