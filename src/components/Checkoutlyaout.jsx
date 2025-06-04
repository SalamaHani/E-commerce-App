import React from "react";
import FormInput from "./FormInput";
import { Form, redirect } from "react-router";
import { customFetch, formatPrice } from "../Util";
import { celerCart } from "../features/Cart/cartSlice";
import { toast } from "sonner";
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    console.log(request, store);

    // console.log(cartItem);
    const formData = await request.formData();
    const Data = Object.fromEntries(formData);

    console.log(Data);
    const user = store.getState().userState.user;
    const { cartItem, numItemsInCart, orderTotal } = store.getState().cartState;
    const info = {
      name: Data.name,
      address: Data.address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      items: cartItem,
      numItemsInCart,
    };
    try {
      const respones = await customFetch.post(
        "/orders",
        { ...info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(respones);
      store.dispatch(celerCart());
      toast.success("order placed successfully", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.respones?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage, {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
      // eslint-disable-next-line no-constant-condition
      if (error?.respones?.status === 401 || 403) return redirect("/Login");
      return null;
    }
  };

function Checkoutlyaout() {
  return (
    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
      <Form method="POST" className="flex flex-col gap-y-4">
        <h4 className="font-medium text-xl capitalize dark:text-white">
          shipping information
        </h4>
        <FormInput label="first name" name="name" type="text" size={"w-full"} />
        <FormInput label="address" name="address" type="text" size={"w-full"} />
        <div className="mt-4">
          <button
            type="submit"
            className="btn bg-black border-0 shadow-0 dark:bg-gray-800 rounded-lg text-white btn-block"
          >
            place your order
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Checkoutlyaout;
