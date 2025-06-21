import React from "react";
import { Link } from "react-router";

function Footer() {
  const styled = { height: "33px", width: "150px" };
  return (
    <>
      <footer className="bg-light bg-[#f2f2f2]  dark:bg-gray-800  text-black dark:text-white dark:bg-darkmode-light">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center py-10 md:pt-20 md:pb-14">
            <a href="/" className="navbar-brand inline-block">
              <img
                src="/public/images/logo.png"
                alt="Astrofront"
                loading="lazy"
                decoding="async"
                style={styled}
                width="300"
                height="66"
                className="inline-block dark:hidden"
              />
              <img
                src="/public/images/logo-darkmode.png"
                alt="Astrofront"
                loading="lazy"
                decoding="async"
                style={styled}
                width="300"
                height="66"
                className="hidden dark:inline-block"
              />
            </a>
            <ul className="flex gap-x-5 lg:gap-x-10 my-3">
              <li className="footer-link  dark:text-white dark:hover:text-gray-400 text-gray-500 hover:text-black font-title">
                <Link to="/About">About</Link>
              </li>
              <li className="footer-link  dark:text-white dark:hover:text-gray-400 text-gray-500 hover:text-black font-title">
                <Link to="/Products">Products</Link>
              </li>
              <li className="footer-link  dark:text-white dark:hover:text-gray-400 text-gray-500 hover:text-black font-title">
                <Link to="/Cart">Cart</Link>
              </li>
            </ul>
            <ul className="flex gap-x-4 lg:gap-x-10  justify-between social-icons social-icons-footer">
              <li className=" w-10 h-10 bg-white hover:bg-black hover:text-white dark:bg-gray-900 dark:hover:bg-white dark:hover:text-black rounded-full  flex items-center justify-center">
                <a
                  aria-label="facebook"
                  href="https://www.facebook.com/salama.hani.299971?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <span className="sr-only ">facebook</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                    className="inline-block "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                  </svg>
                </a>
              </li>
              <li className="w-10 h-10 bg-white hover:bg-black hover:text-white dark:bg-gray-900 dark:hover:bg-white dark:hover:text-black rounded-full  flex items-center justify-center">
                <a
                  aria-label="twitter"
                  href="https://x.com/themefisher"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <span className="sr-only">twitter</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="inline-block"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 bg-white hover:bg-black hover:text-white dark:bg-gray-900 dark:hover:bg-white dark:hover:text-black rounded-full  flex items-center justify-center">
                <a
                  aria-label="linkedin"
                  href="https://www.linkedin.com/in/salama-hani-8a31b6270/?trk=public-profile-join-page"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <span className="sr-only">linkedin</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="inline-block"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </li>
              <li className="w-10 h-10 bg-white hover:bg-black hover:text-white dark:bg-gray-900 dark:hover:bg-white dark:hover:text-black rounded-full  flex items-center justify-center">
                <a
                  aria-label="github"
                  href="https://github.com/SalamaHani"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <span className="sr-only">github</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                    className="inline-block"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="border-t border-border py-5 dark:border-darkmode-border">
            <div className="flex flex-col md:flex-row gap-y-2 justify-between items-center text-text-light dark:text-darkmode-text-light">
              <ul className="flex gap-x-4">
                <li className="footer-link">
                  <a href="/">Privacy &amp; Policy</a>
                </li>
                <li className="footer-link">
                  <a href="/">Terms of Service</a>
                </li>
              </ul>
              <p className="text-sm font-light">
                Designed And Developed by
                <a href="/"> Salama Hani</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
