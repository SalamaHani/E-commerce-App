import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

function SwiperSe() {
  const stylewidthe = { with: "780px" };
  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return (
        '<span class="' +
        "swiper-pagination-bullet dark:bg-red" +
        className +
        '">' +
        "" +
        "</span>"
      );
    },
  };
  return (
    <Wrapper>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper swiper swiper-initialized swiper-horizontal swiper-backface-hidden  "
        style={stylewidthe}
      >
        <SwiperSlide className="swiper-said">
          <div className="flex flex-row flex-wrap items-center justify-around px-7 sm:flex-none xl:px-16">
            <div className=" order-2 lg:order-0">
              <div className="text-start sm:text-center w-xs py-10 lg:py-0 ">
                <p className="mb-2 text-sm lg:mb-3 text-gray-700 dark:text-gray-100 font-medium font-title md:text-xl">
                  Work light, LED, white
                </p>
                <div className="flex flex-row">
                  <h1 className="mb-10 text-2xl text-black dark:text-white sm:text-4xl font-bold font-title lg:mb-10  mx-auto">
                    Styles Accessories &amp; New Table Lamp
                  </h1>
                </div>
                <a
                  className=" bg-black dark:bg-white py-4 px-8 text-xl sm:py-4 sm:px-14 rounded-md text-white  dark:text-black btn-sm md:btn-lg my-10 font-title"
                  href="products/styles-accessories-new-table-lamp"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="sm:col-12 lg:col-6">
              <img
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/files/Group1000005037.png?v=1700127846"
                className="mx-auto w-[388px] lg:w-full"
                width="507"
                height="385"
                alt="banner image"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-row flex-wrap items-center justify-around px-7 sm:flex-none xl:px-16">
            <div className=" order-2 lg:order-0">
              <div className="text-start sm:text-center w-xs py-10 lg:py-0 ">
                <p className="mb-2 text-sm lg:mb-3 text-gray-700 dark:text-gray-100 font-medium font-title md:text-xl">
                  Radiant, Stylish Table Lamps
                </p>
                <div className="flex flex-row">
                  <h1 className="mb-10 text-2xl text-black dark:text-white sm:text-4xl font-bold font-title lg:mb-10  mx-auto">
                    Explore Radiant Illumination for Your Space
                  </h1>
                </div>
                <a
                  className="bg-black dark:bg-white py-4 px-8 text-xl sm:py-4 sm:px-14 rounded-md text-white  dark:text-black btn-sm md:btn-lg my-10 font-title"
                  href="products/explore-radiant-illumination-for-your-space"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="sm:col-12 lg:col-6">
              <img
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/files/11062497_48473_Converted_3.png?v=1700127894"
                className="mx-auto w-[388px] lg:w-full"
                width="507"
                height="385"
                alt="banner image"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-row flex-wrap items-center justify-around px-7 sm:flex-none xl:px-16">
            <div className="order-2 lg:order-0">
              <div className="text-start sm:text-center w-xs py-10 lg:py-0 ">
                <p className="mb-2 text-sm lg:mb-3 text-gray-700 dark:text-gray-100 font-medium font-title md:text-xl">
                  Sleek, Contemporary Glow
                </p>
                <div className="flex flex-row">
                  <h1 className="mb-10 text-2xl text-black dark:text-white sm:text-4xl font-bold font-title lg:mb-10  mx-auto">
                    Experience Modern Elegance in Innovative Lighting Designs
                  </h1>
                </div>
                <a
                  className="bg-black dark:bg-white py-4 px-8 text-xl sm:py-4 sm:px-14 rounded-md text-white  dark:text-black btn-sm md:btn-lg my-10 font-title"
                  href="products/experience-modern-elegance-in-innovative-lighting-designs"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="sm:col-12 lg:col-6">
              <img
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/files/11062497_48473_Converted_5.png?v=1700127953"
                className="mx-auto w-[388px] lg:w-full"
                width="507"
                height="385"
                alt="banner image"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-row flex-wrap items-center justify-around px-7 sm:flex-none xl:px-16">
            <div className="order-2 lg:order-0">
              <div className="text-start sm:text-center w-xs py-10 lg:py-0 ">
                <p className="mb-2 text-sm lg:mb-3 text-gray-700 dark:text-gray-100 font-medium font-title md:text-xl">
                  Transform with Stylish Lamps
                </p>
                <div className="flex flex-row">
                  <h1 className="mb-10 text-2xl text-black dark:text-white sm:text-4xl font-bold font-title lg:mb-10  mx-auto">
                    Step into the Future of Lighting with Bright Innovations
                  </h1>
                </div>
                <a
                  className="bg-black dark:bg-white py-4 px-8 text-xl sm:py-4 sm:px-14 rounded-md text-white  dark:text-black btn-sm md:btn-lg my-10 font-title"
                  href="products/step-into-the-future-of-lighting-with-bright-innovations"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="sm:col-12 lg:col-6">
              <img
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/files/11062497_48473_Converted_5_1.png?v=1700128020"
                className="mx-auto w-[388px] lg:w-full"
                width="507"
                height="385"
                alt="banner image"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .swiper-pagination-bullet {
    background-color: gray;
  }
  .swiper-pagination-bullet-active {
    background-color: black;
    width: 15px;
    height: 10px;
    border-radius: 5px;
  }
  .swiper-pagination-bullet-active-dark {
    background-color: white;
    width: 15px;
    height: 10px;
    border-radius: 5px;
  }
`;

export default SwiperSe;
