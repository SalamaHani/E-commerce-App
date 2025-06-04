import React from "react";
import { useSelector } from "react-redux";
// import { celerCart } from "../features/Cart/cartSlice";

import { Link } from "react-router";
function Hedaruser() {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      <header className="bg-neutral  py-2 text-neutral-content  z-30 sticky top-0 dark:bg-gray-800">
        <div className="align-element  container flex justify-center sm:justify-end">
          {user ? (
            <div className="flex gap-x-2 sm:gap-x-8 items-center">
              <p className="text-xs sm:text-sm">Hello,{user.name} </p>
            </div>
          ) : (
            <div className="flex gap-x-6 justify-center items-center">
              <Link to="/login" className="link link-hover text-xs sm:text-sm">
                Sign in / Guest
              </Link>
              <Link
                to="/Registr"
                className="link link-hover text-xs sm:text-sm"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Hedaruser;
