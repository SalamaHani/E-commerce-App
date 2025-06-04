import React from "react";
import { toast } from "react-toastify";
import { redirect } from "react-router";
import Checkoutlyaout from "../components/Checkoutlyaout";
import CartTotal from "../components/CartTotal";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/Login");
  }
  return null;
};

function Checkout() {
  const Totalquantity = useSelector((state) => state.cartState);
  const { cartItem } = Totalquantity;
  if (cartItem.length === 0) {
    return <EmptyCart Titel={"Empty Cart"} />;
  }
  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-5 dark:text-white sm:text-2xl">
            place your order
          </h2>
          <hr className="border  border-[#b8b8b8]" />
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <Checkoutlyaout />
            <CartTotal />
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
