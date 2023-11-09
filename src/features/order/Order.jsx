// Test ID: IIDSAT
import { useFetcher, useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const orderData = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  console.log(fetcher);

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = orderData;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-6 px-4 py-6 ">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-300 px-4 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className=" divide-y divide-stone-300 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            isLoadingIngredients={fetcher.state === "loading"}
            key={item.pizzaId}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div className="space-y-3 bg-stone-300 px-4 py-6">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={orderData} />}
    </div>
  );
}

export async function loader({ params }) {
  const orderData = getOrder(params.orderId);
  return orderData;
}

export default Order;
