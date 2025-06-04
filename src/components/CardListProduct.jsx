import React from "react";
import { Link } from "react-router";
import { formatPrice } from "../Util";
import { useDispatch, useSelector } from "react-redux";
import { togelFavaret } from "../features/Cart/cartSlice";

function CardListProduct({ item }) {
  const {
    id,
    image,
    name,
    price,
    brand,
    shipping,
    discount_price,
    category,
    category_id,
  } = item;
  const carts = useSelector((state) => state.cartState.Favorites);
  const Favorites = carts.some((item) => item.cartID == id);
  const dicpatch = useDispatch();
  const handeltogel = () => {
    dicpatch(
      togelFavaret({
        id,
        image,
        name,
        price,
        shipping,
        discount_price,
        category,
        category_id,
      })
    );
  };
  return (
    <article className="relative">
      <Link
        to={`/Products/${id}`}
        className="card card-side bg-base-100 flex flex-wrap shadow-2xl pb-2 dark:bg-gray-800"
      >
        <img
          className="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
          src={image}
          alt="Movie"
        />
        <div className="card-body pb-0 dark:text-white ">
          <h2 className="card-title mb-2 dark:text-white text-2xl font-bold tracking-tight text-gray-900 ">
            {name}
          </h2>
          <h5 classNameName="mb-2 text-md  tracking-tight text-gray-900 dark:text-white">
            {brand}
          </h5>
          <p className="">{formatPrice(price)}</p>
        </div>
        <div className="card-actions justify-end mr-4">
          <button className="m-3 bg-white text-black hover:text-white border-1 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black dark:focus:ring-gray-700 dark:border-gray-700">
            Add to Card
          </button>
        </div>
      </Link>
      <div className="absolute top-30 right-5 z-10">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  border-input bg-white  shadow-sm hover:bg-gray-200 hover:text-accent-foreground h-9 w-9 p-2 cursor-pointer"
          type="submit"
          onClick={handeltogel}
        >
          {Favorites ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokewidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
            </svg>
          )}
        </button>
      </div>
    </article>
  );
}

export default CardListProduct;
