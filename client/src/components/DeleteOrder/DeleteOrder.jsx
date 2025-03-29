import { Navigate, useParams } from "react-router"
import { useDeleteOrder } from "../../api/ordersApi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function DeleteOrder() {

    const { id } = useParams();
    const { accessToken } = useContext(UserContext);;
    const { error } = useDeleteOrder(accessToken, id);

    if (error) {

        return (
            <>
                <p>{error}</p>
            </>
        )
    }

    return (
        <Navigate to={'/orders'} />
    )
}