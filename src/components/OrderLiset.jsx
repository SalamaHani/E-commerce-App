import React from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { formatPrice } from "../Util";
dayjs.extend(advancedFormat);
import { useLoaderData } from "react-router";

function OrderLiset() {
  const { orders, meta } = useLoaderData();
  const staus = [
    { id: 1, states: "delivered", color: "bg-success/20 text-success/100" },
    { id: 2, states: "shipped", color: "bg-error/20 text-error/100" },
    { id: 3, states: "processing", color: "bg-primary/20 text-primary/100" },
    { id: 4, states: "pending", color: "bg-warning/20 text-warning/100" },
  ];
  return (
    <>
      <div className="mt-8">
        <h4 className="mb-4 capitalize dark:text-gray-400">
          total orders : {meta.total}
        </h4>
        <div className="overflow-x-auto">
          <table className="table  table-zebra dark:[&>*:nth-child(2n)]:bg-red dark:text-white">
            {/* head */}
            <thead className="dark:text-gray-400">
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Products</th>
                <th>Cost</th>
                <th>status</th>
                <th className="hidden sm:block">Date</th>
              </tr>
            </thead>
            <tbody className="dark:[&>*:nth-child(2n)]:bg-gray-800">
              {orders.map((item) => {
                const id = item.id;
                const {
                  customer_name,
                  address,
                  items,
                  total,
                  status,
                  updated_at,
                } = item;
                const date = dayjs(updated_at).format("hh:mm a - MMM Do, YYYY");
                return (
                  <tr key={id}>
                    <td>{customer_name}</td>
                    <td>{address}</td>
                    <td>{items.length}</td>
                    <td>{formatPrice(total)}</td>
                    <td>
                      <div className="flex items-center">
                        {staus.map((item) => {
                          if (item.states == status) {
                            return (
                              <span
                                key={item.id}
                                className={`${item.color} text-xs text-success-600 dark:bg-success/500/15 rounded-full px-2 py-0.5 font-medium`}
                              >
                                {status}
                              </span>
                            );
                          }
                        })}
                      </div>
                    </td>
                    <td className="hidden sm:block">{date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrderLiset;
