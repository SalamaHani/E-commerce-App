import React from "react";
import { useSelector } from "react-redux";
function FormForgetpass() {
  const errorse = useSelector((state) => state.userState.error);
  return (
    <>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-xl dark:text-white/90 sm:text-title-md">
              Reset Password Form
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email to Reset  PasswordForm !
            </p>
          </div>
          <div className="relative py-1 sm:py-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                Send
              </span>
            </div>
          </div>
          <div>
            <div className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Email Address<span className="text-error-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="info@gmail.com"
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  fdprocessedid="f7y78o"
                />
                {errorse.email != null ? (
                  <span className="text-sm text-error/75 ">
                    {errorse.email[0]}
                  </span>
                ) : (
                  <span className="text-sm text-gray-400">
                    A email is required a unique
                  </span>
                )}
              </div>
              <div>
                <button
                  className="flex items-center justify-center  bg-black dark:bg-gray-800 w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                  type="submit"
                >
                  Send Message to Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormForgetpass;
