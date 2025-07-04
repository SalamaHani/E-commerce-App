import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../Util";
import { Link } from "react-router";
import Payments from "./Payments";

function CartTotal() {
  const Totalquantity = useSelector((state) => state.cartState);
  const { cartTotal, orderTotal, shipping, tax } = Totalquantity;
  return (
    <>
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Order summary
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Subtotal
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  {formatPrice(cartTotal)}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Shipping
                </dt>
                <dd className="text-base font-medium text-green-600">
                  {formatPrice(shipping)}
                </dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Tax
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  {formatPrice(tax)}
                </dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">
                Order Total
              </dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">
                {formatPrice(orderTotal)}
              </dd>
            </dl>
          </div>

          {/* <Payments /> */}

          <Link
            className="btn bg-black border-0 shadow-0 dark:bg-gray-800 rounded-lg text-white btn-block"
            to="/Checkout"
          >
            Checkout Order
          </Link>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              or
            </span>
            <Link
              to="/Checkout"
              title=""
              className="inline-flex items-center  gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              Continue Shopping
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <form className="space-y-4">
            <div>
              <label
                for="voucher"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Do you have a voucher or gift card?
              </label>
              <input
                type="text"
                id="voucher"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder=""
                required
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Apply Code
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CartTotal;
