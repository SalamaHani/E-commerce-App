import React, { useState } from "react";
import { useLoaderData } from "react-router";
import NoProducts from "./NoProducts";
import GridProduct from "./GridProduct";
import ListProduct from "./ListProduct";
import SortBy from "./SortBy";
import { FiMenu } from "react-icons/fi";
import { TiThLarge } from "react-icons/ti";
// import { useQuery } from "@tanstack/react-query";

function ContenerProduct() {
  const { products, meta } = useLoaderData();
  const { total } = meta;
  const [Lyout, setLyout] = useState("Grid");
  const setActiveStyles = (pattern) => {
    return `p-2 border rounded-full  dark:border-darkmode-border  dark:bg-gray-700 btn-primary hover:scale-105 duration-300 ${
      pattern === Lyout
        ? "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        : "btn-ghost text-based-content"
    }`;
  };
  if (products.length == 0) {
    return <NoProducts />;
  }
  return (
    <>
      <div className="col-12 lg:col-9 z-40">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-x-4 items-center font-medium text-xs md:text-base">
            <p className="max-md:hidden text-text-dark dark:text-white dark:text-darkmode-text-dark">
              Views
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setLyout("Grid")}
                className={setActiveStyles("Grid")}
              >
                <TiThLarge />
              </button>
              <button
                onClick={() => setLyout("List")}
                className={setActiveStyles("List")}
              >
                <FiMenu />
              </button>
            </div>
          </div>
          <div className="flex gap-x-8">
            <div className="filter-button-container block lg:hidden mt-1 bg-amber-200">
              <button>
                <span className="font-medium text-base flex gap-x-1 items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"></path>
                  </svg>
                  Filter
                </span>
              </button>
            </div>
          </div>
          <p className="font-bold dark:text-white">{total} Products</p>
        </div>
      </div>
      {Lyout === "Grid" ? <GridProduct /> : <ListProduct />}
    </>
  );
}

export default ContenerProduct;
