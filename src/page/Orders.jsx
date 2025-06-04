import React from "react";
import OrderLiset from "../components/OrderLiset";
import { customFetch } from "../Util";
import { toast } from "react-toastify";
import { redirect } from "react-router";
import Compelxpagination from "../components/Compelxpagination";
import { useLoaderData } from "react-router";
import EmptyCart from "../components/EmptyCart";
// const allqueryOrders = (params, user) => {
//   console.log(params.page);
//   return {
//     querykey: [
//       "orders",
//       user.username,
//       params.page ? parseInt(params.page) : 1,
//     ],
//     queryFn: () => {
//       return customFetch.get("/orders", {
//         params,
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       });
//     },
//   };
// };
// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must logged in to view orders");
      return redirect("/Login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      // const paramspage = params.page ? parseInt(params.page) : 1;
      // const Responer = await queryClient.ensureQueryData(
      //   allqueryOrders(params, user)
      // );
      const Responer = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return { orders: Responer.data.data, meta: Responer.data };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.Responer?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);
      // eslint-disable-next-line no-constant-condition
      if (error?.Responer?.status === 401 || 403) return redirect("/Login");
      return null;
    }
  };
function Orders() {
  const { meta } = useLoaderData();
  const { total } = meta;
  if (total < 1) {
    return <EmptyCart Titel={"Please Make an Order"} />;
  }
  return (
    <div className="align-element container py-20">
      <h2 className="text-xl font-semibold text-gray-900 mb-5 dark:text-white sm:text-2xl">
        Your Orders
      </h2>
      <hr className="border  border-[#b8b8b8]" />
      <OrderLiset />
      <Compelxpagination />
    </div>
  );
}

export default Orders;
