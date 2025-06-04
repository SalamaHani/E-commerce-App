import React from "react";
import { useNavigate } from "react-router";

function SecctionTwo() {
  const navget = useNavigate();
  return (
    <>
      <section className="bg-white dark:bg-gray-900 my-20">
        <div className="container">
          <div className="my-10  rounded-md bg-[#f2f2f2] dark:bg-gray-800 bg-light p-8   dark:bg-darkmode-light">
            <div className="flex flex-row flex-wrap items-center justify-around px-7 sm:flex-none xl:px-16">
              <div className=" order-2 lg:order-0">
                <div className="text-start sm:text-center w-xs py-10 lg:py-0 ">
                  <p className="mb-2 text-sm lg:mb-3 text-gray-700 dark:text-gray-100 font-medium font-title md:text-xl">
                    Deal of the Week
                  </p>
                  <div className="flex flex-row">
                    <h1 className="mb-3 text-4xl text-black dark:text-white  font-bold font-title lg:mb-3  mx-auto">
                      Curved Collection for Your Bedroom Get 25% Off
                    </h1>
                  </div>
                  <p className="text-base mb-5 dark:text-white">
                    Subscribe our Newsletter and get all latest information
                  </p>
                  <button
                    onClick={() => navget("/Products")}
                    className=" bg-black dark:bg-white py-4 px-8 text-xl sm:py-4 sm:px-14 rounded-md text-white  dark:text-black btn-sm md:btn-lg my-10 font-title"
                    href="products"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="">
                <img
                  src="/public/images/call-to-action.png"
                  className="mx-auto"
                  width="407"
                  height="385"
                  alt="banner image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecctionTwo;
