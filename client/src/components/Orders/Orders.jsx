import { useOrders } from "../../api/ordersApi";
import { OrderItem } from "./OrderItem/OrderItem";
import './Orders.css'

export function Orders() {

    const { orders } = useOrders();

    return (
        <>
            <div className="orderContainer">
                {orders.map(order => <OrderItem key={order._id} order={order} />)}
            </div>

        </>
    )

}