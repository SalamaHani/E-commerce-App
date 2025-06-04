import React from "react";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
function Cart() {
  const Totalquantity = useSelector((state) => state.cartState);
  const carts = useSelector((state) => state.cartState.cartItem);
  const { cartItem } = Totalquantity;
  if (cartItem.length == 0) {
    return <EmptyCart Titel={"Empty Cart"} />;
  }
  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-5 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>
          <hr className=" border-[#b8b8b8]" />
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <CartItems carts={carts} />
            <CartTotal />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
