import { useContext, useState } from "react"
import './Login.css'
import { useLogin } from "../../../api/authApi";
import { UserContext } from "../../../contexts/UserContext";


export function Login() {

    const { login } = useLogin();
    const { loginHandler } = useContext(UserContext);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const validate = () => {

        const newErrors = {};

        if (!values.email) {
            newErrors.email = "Email is required.";
        }

        if (!values.password) {
            newErrors.password = "Password is required.";
        }

        return newErrors;
    };

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onLogin = async (e) => {

        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors);
            return;
        }

        const response = await login(values);
        loginHandler(response);

    }

    return (


        <form onSubmit={onLogin} className="mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6 mt-20">
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


            <div className="flex justify-center">
                <input
                    type="submit"
                    value='Login'
                    className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200 transform hover:scale-105"
                />
            </div>
        </form>

    )
}