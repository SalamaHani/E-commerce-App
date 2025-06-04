import React from "react";
import SwiperSe from "./SwiperSe";

function SectionOne() {
  // const styleSwipar = { transitionduration: "0ms", transitiondelay: "0ms" };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container">
          <div className="my-10  rounded-md bg-[#f2f2f2] dark:bg-gray-800 bg-light px-6   dark:bg-darkmode-light">
            <SwiperSe />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionOne;
