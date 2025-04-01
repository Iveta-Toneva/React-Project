import { useParams } from "react-router"
import { useEditOrder, useOrder } from "../../api/ordersApi";
import { useNavigate } from "react-router";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";


export function EditOrder() {

    const { id } = useParams();
    const { order } = useOrder(id);
    const { edit } = useEditOrder();
  

    const [values, setValues] = useState({
        title: '',
        description: '',
        img: '',
        username: ''
    });

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        img: '',
        username: ''
    });

    useEffect(() => {

        if (order) {
            setValues({
                title: order.title || '',
                description: order.description || '',
                img: order.img || '',
                username: order.username || ''
            });
        }

    }, [order]);

    const { accessToken } = useContext(UserContext);

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

        if (!values.username) {
            newErrors.username = "Username is required.";
        }

        return newErrors;
    };



    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const editHandler = async (e) => {

        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors);
            return;
        }


        const data = { ...values, _id: order._id };
        const response = await edit(data, accessToken, order._id);

        navigate('/orders');

    }


    return (
        <>
            <form onSubmit={editHandler} className="mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6 mt-20">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        onChange={onChangeHandler}
                        value={values.title}
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
                        onChange={onChangeHandler}
                        value={values.description}
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
                        onChange={onChangeHandler}
                        value={values.img}
                    />
                    {errors.img && <p className="text-red-500 text-sm mt-1">{errors.img}</p>}

                </div>

                <div>
                    <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username :</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        onChange={onChangeHandler}
                        value={values.username}
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}

                </div>

                <div className="flex justify-center">
                    <input
                        type="submit"
                        value='Edit your order'
                        className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200 transform hover:scale-105"
                    />
                </div>
            </form>
        </>
    )
}