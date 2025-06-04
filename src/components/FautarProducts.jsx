import React from "react";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router";
import { Link } from "react-router";

function FautarProducts() {
  const proudct = useLoaderData();
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container">
          <div className="my-32  rounded-md bg-light px-6   dark:bg-darkmode-light">
            <div className="text-center mb-6 md:mb-14">
              <h2 className="mb-2 text-4xl font-bold font-title dark:text-white  text-black">
                Featured Products
              </h2>
              <p className="md:h5  dark:text-white font-title  text-black">
                Explore Today's Featured Picks!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {proudct.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
          <div className="flex justify-center">
            <Link
              className=" bg-black dark:bg-white py-6 px-14 text-xl sm:py-4 sm:px-14 rounded-md text-white  dark:text-black btn-sm md:btn-lg my-10 font-title-sm  btn-primary font-medium"
              to="/products"
            >
              + See All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default FautarProducts;
