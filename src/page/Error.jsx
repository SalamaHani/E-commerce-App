import React from "react";
import { useRouteError, Link } from "react-router";

function Error() {
  const error = useRouteError();
  if (error.name == "AxiosError") {
    return (
      <>
        <main className="grid min-h-[100vh] place-items-center px-8">
          <div className="text-center">
            <p className="text-9xl font-semibold dark:text-red-300 text-primary">
              403
            </p>
            <h1 className="mt-4 text-3xl font-bold  dark:text-white tracking-tight sm:text-5xl">
              not found end point
            </h1>
            <p className="mt-6 text-lg leading-7 dark:text-white">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <Link to="/" className="btn btn-error">
                go back home
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-error">
              go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Error;
