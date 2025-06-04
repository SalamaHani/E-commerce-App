import React from "react";
import { useLoaderData } from "react-router";
import ModeEditP from "./ModeEditP";
function UserAdders() {
  const userdata = useLoaderData();
  const { country, city, zip_code, street_address } = { ...userdata };
  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl  dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
              Address
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Country
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {country ?? " United States"}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  City/State
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {city ?? "Arizona, United States."}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Postal Code
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {zip_code ?? " ERT 2489"}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  TAX ID
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {street_address ?? "AS4568384"}
                </p>
              </div>
            </div>
          </div>
          <div>
            <ModeEditP />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAdders;
