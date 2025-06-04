import React from "react";
import { useSelector } from "react-redux";
function UserValed() {
  const Masegpass = useSelector((state) => state.userState.MasegeForgetpss);

  return (
    <>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Reset Password Form
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email to Reset Password Form !
            </p>
          </div>
          <div className="relative py-1 sm:py-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                Reset Password
              </span>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <h2 className="text-black text-base dark:text-gray-400">
                {Masegpass}
              </h2>
            </div>
            {/* <div className="flex items-center">
              <div className="flex items-center gap-3">
                {photo && photo != null ? (
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100">
                    <img
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100"
                      src={photo ?? ""}
                      alt="user"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center   overflow-hidden  bg-gray-600 border-gray-200 rounded-full dark:border-gray-800">
                    <span>{setstring(name ?? "")}</span>
                  </div>
                )}
                <div>
                  <span className="text-xs mb-0.5 block font-medium text-gray-700 dark:text-gray-400">
                    {name}
                  </span>
                  <span className="text-gray-500  text-xs dark:text-gray-400">
                    {email}
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserValed;
