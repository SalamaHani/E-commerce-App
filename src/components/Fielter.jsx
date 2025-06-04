import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { formatPrice } from "../Util/index";
import { Form, Link, useLoaderData } from "react-router";

function Fielter() {
  const { brands, categories, params } = useLoaderData();
  const { search, category, brand, price, shipping } = params;
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  return (
    <Wrapper>
      <Form className="my-10 rounded-md px-8  bg-[#f2f2f2] dark:bg-gray-800 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <div className="relative dark:text-white">
          <label htmlFor="search" className="label">
            Sarch Products
          </label>
          <input
            type="search"
            placeholder=""
            className=" w-full h-10  bg-white l dark:bg-gray-700 dark:text-gray-400 text-base font-normal shadow-xs text-gray-900  border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            name="search"
            defaultValue={search}
          />
          <div className="absolute right-0 top-3 flex h-full items-center dark:text-gray-400">
            <button
              type="submit"
              className="search-icon p-2 m-1 rounded-full bg-black dark:bg-white"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="h-5 w-5 text-white dark:text-gray-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div className="form-control  dark:text-white mt-3">
            <label htmlFor="category" className="label">
              Categories
            </label>
            <select
              name="category"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
              defaultValue={category}
            >
              {categories.map((item) => {
                return (
                  <option className="dark:bg-gray-700" key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          <div className="form-control  dark:text-white mt-3">
            <label htmlFor="company" className="label">
              brand
            </label>
            <select
              name="brand"
              id="brand"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
              defaultValue={brand}
            >
              {brands.map((item) => {
                return (
                  <option className="dark:bg-gray-700" key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          {/* <div className="form-control  dark:text-white mt-3">
            <label htmlFor="company" className="label">
              sort by
            </label>
            <select
              name="order"
              id="order"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
              defaultValue={order}
            >
              {size.map((item) => {
                return (
                  <option className="dark:bg-gray-700" key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div> */}
        </div>
        <div>
          <div>
            <div className="form-control  dark:text-white">
              <label
                htmlFor="price"
                className="label flex justify-between  cursor-pointer mt-3"
              >
                <span className="label-text capitalize">price</span>
                <span>{formatPrice(selectedPrice)}</span>
              </label>
              <label htmlFor="price">
                <input
                  type="range"
                  name="price"
                  min={0}
                  max={maxPrice}
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="range range-neutral dark:range dark:bg-gray-700 mt-6 "
                  step={step}
                />
              </label>
              <div className="w-full flex justify-between  dark:text-white text-xs px-2 mt-5">
                <span className="font-bold text-md">0</span>
                <span className="font-bold text-md">
                  Max : {formatPrice(maxPrice)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col items-center mt-4 me-4">
            <input
              name="shipping"
              id="green-checkbox"
              defaultChecked={shipping}
              type="checkbox"
              className=" checkbox mb-3 dark:bg-gray-400 "
            />
            <label
              htmlFor="shipping"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Free Shipping
            </label>
          </div>
        </div>
        <div>
          <button
            className="w-full mt-4 bg-white text-black hover:text-white  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black dark:focus:ring-gray-700 dark:border-gray-700"
            type="submit"
          >
            SEARCH
          </button>
        </div>
        <Link
          to="/products"
          className="w-full mt-4 bg-white text-black hover:text-white text-center  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black dark:focus:ring-gray-700 dark:border-gray-700"
        >
          RESET FILTERS
        </Link>
      </Form>
    </Wrapper>
  );
}

export default Fielter;

const Wrapper = styled.section`
  .catcro .activ {
    font-weight: bold;
    border-bottom: 1px solid black;
  }
  .Campny .activ {
    background-color: #e1e1e1;
  }
`;
