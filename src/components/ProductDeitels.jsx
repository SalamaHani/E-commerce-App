import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router";
import { addItem, addFavoritesItem } from "../features/Cart/cartSlice";
import { useState } from "react";
import { generatequantityOptions, formatPrice } from "../Util";
import Reivwe from "./Reivwe";

import ProductsReviews from "./ProductsReviews";
import { SetRewive } from "./SetRewive";
function ProductDeitels() {
  const product = useLoaderData();
  const {
    id,
    name,
    brand,
    description,
    image,
    price,
    average_rating,
    reviews,
  } = {
    ...product,
  };
  const [quantity, setquantity] = useState(1);
  const handelquantity = (e) => {
    setquantity(parseInt(e.target.value));
  };
  const cartProduct = {
    cartID: id,
    product_id: id,
    image,
    name,
    price,
    brand,
    quantity,
  };

  const dicpatch = useDispatch();
  const handelAdd = () => {
    dicpatch(addItem({ product: cartProduct }));
  };
  const handeladdfevaret = () => {
    dicpatch(addFavoritesItem({ product: cartProduct }));
  };

  return (
    <>
      <section className="pb-24 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
            <div className="flex flex-col justify-between">
              <img
                className="w-96 h-96 object-cover rounded-lg lg:w-full  bg-[#f2f2f2]"
                src={image}
                alt=""
              />
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <div className="flex justify-between ">
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                  {name}
                </h1>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <Reivwe Reaviw={average_rating} />
                </div>
              </div>
              <h4 class="text-xl text-neutral-content font-bold mt-2 dark:text-white">
                {brand}
              </h4>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p class="mt-3 text-xl dark:text-white">{formatPrice(price)}</p>
              </div>
              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  type="button"
                  onClick={() => handelAdd()}
                  className="flex md:mb-0 mb-4 items-center mt-5 md:mt-0 justify-center py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </button>
                <button
                  type="button"
                  onClick={handeladdfevaret}
                  className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  Add to favorites
                </button>
              </div>
              <div className="form-control w-full max-w-xs mt-5">
                <label className="label" htmlFor="quantity">
                  <h4 className="text-md font-medium -tracking-wider capitalize">
                    quantity
                  </h4>
                </label>
                <select
                  className="select dark:bg-gray-800 dark:text-white"
                  id="quantity"
                  value={quantity}
                  onChange={handelquantity}
                >
                  {generatequantityOptions(20)}
                </select>
              </div>
              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
              <div className="payment">
                <div className="flex flex-wrap items-center gap-7">
                  <h5 className="max-md:text-base text-xl font-bold dark:text-white">
                    Payment:
                  </h5>
                  <img
                    src="/public/images/payment/bkash.png"
                    alt="Visa"
                    width="44"
                    height="32"
                  />
                  <img
                    src="/public/images/payment/express.png"
                    alt="MasterCard"
                    width="44"
                    height="32"
                  />
                  <img
                    src="/public/images/payment/mastercard.png"
                    alt="Express"
                    width="44"
                    height="32"
                  />
                  <img
                    src="/public/images/payment/nagad.png"
                    alt="Bkash"
                    width="44"
                    height="32"
                  />
                  <img
                    src="/public/images/payment/upay.png"
                    alt="Nagad"
                    width="44"
                    height="32"
                  />
                  <img
                    src="/public/images/payment/visa.png"
                    alt="Upay"
                    width="44"
                    height="32"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <SetRewive />
          </div>
          <ProductsReviews reviews={reviews} />
        </div>
      </section>
    </>
  );
}

export default ProductDeitels;
