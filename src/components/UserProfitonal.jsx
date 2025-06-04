import React from "react";

import { useLoaderData } from "react-router";
import ModeEditP from "./ModeEditP";
function UserProfitonal() {
  const datauser = useLoaderData();
  const { first_name, last_name, email, phone, bio } = { ...datauser };
  return (
    <>
      <div className="p-5 mb-6 border border-gray-200 rounded-2xl  dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
              Personal Information
            </h4>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  First Name
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {first_name ?? "FN"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Last Name
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {last_name ?? "LN"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Email address
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {email}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Phone
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {phone ?? "+977 ..."}
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Password
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {"••••••••"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Bio
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {bio ?? "B"}
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

export default UserProfitonal;
