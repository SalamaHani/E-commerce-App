import React from "react";
import { useLoaderData } from "react-router";
import { FiMenu } from "react-icons/fi";
import { TiThLarge } from "react-icons/ti";

function SortBy() {
  const { meta } = useLoaderData();
  const { total } = meta;

  return (
    <>
      <div className="col-12 lg:col-9">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-x-4 items-center font-medium text-xs md:text-base">
            <p className="max-md:hidden text-text-dark dark:text-darkmode-text-dark">
              Views
            </p>
            <div className="flex gap-2">
              <button className="p-2 border rounded-full dark:bg-white dark:border-darkmode-border btn-primary hover:scale-105 duration-300">
                <TiThLarge />
              </button>
              <button className="p-2 border rounded-full dark:border-darkmode-border btn-outline-primary hover:scale-105 duration-300">
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
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
          <p className="font-bold">{total} Products</p>
        </div>
      </div>
    </>
  );
}

export default SortBy;
