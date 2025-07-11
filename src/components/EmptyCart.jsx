import React from "react";
import { Link } from "react-router";
function EmptyCart({Titel}) {
  return (
    <>
      <div className="hero  min-h-screen dark:bg-gray-900 dark:text-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Sorry  {Titel}</h1>
            <p className="py-6">no products matched your search...</p>
            <Link
              to="/Products"
              className="btn text-white mt-4 bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
