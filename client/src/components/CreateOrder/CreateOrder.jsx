import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext";
import { useCreateOrder } from "../../api/ordersApi";
import { useNavigate } from "react-router";



export function CreateOrder() {

    const [values, setValues] = useState({
        title: '',
        description: '',
        img: ''
    });

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        img: ''
    });

    const { accessToken } = useContext(UserContext);
    const { create } = useCreateOrder();
    const navigate = useNavigate();


    const validate = () => {

        const newErrors = {};

        if (!values.title) {
            newErrors.title = "Title is required.";
        }


        if (!values.description) {
            newErrors.description = "Description is required.";
        }


        if (!values.img) {
            newErrors.img = "Image is required.";
        }

        return newErrors;
    };



    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const createHandler = async (e) => {

        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors);
            return;
        }


        const response = await create(values, accessToken);

        navigate('/orders');

    }

    return (
        <form onSubmit={createHandler} className="mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6 mt-20">
            <div>
                <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your title"
                    onChange={onChangeHandler}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description:</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your description"
                    onChange={onChangeHandler}
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            <div>
                <label htmlFor="img" className="block text-lg font-medium text-gray-700">Image Url:</label>
                <input
                    type="text"
                    name="img"
                    id="img"
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your image url"
                    onChange={onChangeHandler}
                />
                {errors.img && <p className="text-red-500 text-sm mt-1">{errors.img}</p>}

            </div>

            <div className="flex justify-center">
                <input
                    type="submit"
                    value='Place your order'
                    className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200 transform hover:scale-105"
                />
            </div>
        </form>

    )
}