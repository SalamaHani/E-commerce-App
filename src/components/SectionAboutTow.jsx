import React from "react";

function SectionAboutTow() {
  return (
    <>
      <section className="section my-36">
        <div className="container">
          <div className="my-10  rounded-md bg-[#f2f2f2]  dark:bg-gray-800 bg-light p-8   dark:bg-darkmode-light">
            <h2 className="text-center text-5xl dark:text-white font-bold">
              Reasons to shop with us
            </h2>
            <div className="flex flex-row p-20 justify-center gap-10 mt-14 flex-wrap lg:flex-nowrap dark:text-white">
              <div className="col-6 md:col-5 lg:col-3">
                <div className="flex justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    height="48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                  </svg>
                </div>
                <h3 className="md:h4 mt-6 mb-8 text-center  text-3xl font-bold">
                  24/7 Friendly Support
                </h3>
                <p className="text-center ">
                  Our support team always ready for you to 7 days a week
                </p>
              </div>
              <div className="col-6 md:col-5 lg:col-3">
                <div className="flex justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                    height="48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"></path>
                  </svg>
                </div>
                <h3 className="md:h4 mt-6 mb-8 text-3xl font-bold text-center">
                  7 Days Easy Return
                </h3>
                <p className="text-center">
                  Product any fault within 7 days for an immediately exchange.
                </p>
              </div>
              <div className="col-6 md:col-5 lg:col-3">
                <div className="flex justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    height="48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                  </svg>
                </div>
                <h3 className="md:h4 mt-6 mb-8 text-center  text-3xl font-bold">
                  Quality Guaranteed
                </h3>
                <p className="text-center">
                  If your product are not perfect, return them for a full refund
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionAboutTow;
