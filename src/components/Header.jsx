import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { toogeltheme, togetllMnuuser } from "../features/User/userSlice";
import { setstring } from "../Util";
import NavLinkHed from "./NavLinkHed";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import MnuUser from "./MnuUser";

function Header() {
  const styled = { height: "33px", width: "150px" };
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toogeltheme());
  };
  const handelUser = () => {
    dispatch(togetllMnuuser());
  };
  const [isOpen, setIsOpen] = useState(false);
  const themse = useSelector((state) => state.userState.themes);
  const user = useSelector((state) => state.userState.user);
  const MnuUsere = useSelector((state) => state.userState.MnuUser);
  const toggleContainer = {
    outline: "none",
    border: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    cursor: "pointer",
    position: "absolute",
    top: -21,
    left: 0,
    width: 50,
    height: 50,
    borderRadius: "50%",
  };
  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900   z-30 sticky top-0 transition-shadow shadow-xl duration-300">
        <nav
          className="mx-auto flex max-w-7xl container items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="relative lg:hidden z-40 flex ">
            <label
              htmlFor="nav-toggle"
              className="order-3 cursor-pointer flex justify-between items-center text-black text-text-dark dark:text-white lg:order-1"
            >
              <>
                <motion.nav
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  custom={{ with: 0, haight: 0 }}
                >
                  <motion.div
                    className="dark:bg-gray-800"
                    variants={sidebarVariants}
                  />
                  <button
                    className="dark:text-white"
                    style={toggleContainer}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <svg
                      className="dark:text-white"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        stroke={
                          themse == "dark"
                            ? "hsl(0, 0%, 100%)"
                            : "hsl(0, 0%, 18%)"
                        }
                        strokeLinecap="round"
                        variants={{
                          closed: { d: "M 2 2.5 L 20 2.5" },
                          open: { d: "M 3 16.5 L 17 2.5" },
                        }}
                      />
                      <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        stroke={
                          themse == "dark"
                            ? "hsl(0, 0%, 100%)"
                            : "hsl(0, 0%, 18%)"
                        }
                        strokeLinecap="round"
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                          closed: { opacity: 1 },
                          open: { opacity: 0 },
                        }}
                        transition={{ duration: 0.1 }}
                      />
                      <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        stroke={
                          themse == "dark"
                            ? "hsl(0, 0%, 100%)"
                            : "hsl(0, 0%, 18%)"
                        }
                        strokeLinecap="round"
                        variants={{
                          closed: { d: "M 2 16.346 L 20 16.346" },
                          open: { d: "M 3 2.5 L 17 16.346" },
                        }}
                      />
                    </svg>
                  </button>
                </motion.nav>
              </>
            </label>
          </div>
          {isOpen ? (
            <ul
              tabIndex={0}
              className="menu menu-sm absolute  dark:bg-gray-900 lg:hidden  top-18 left-0 to dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinkHed />
            </ul>
          ) : (
            ""
          )}
          <div className="w-40 lg:flex items-center justify-between space-x-7 hidden  lg:space-x-14">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                src="/images/logo.png"
                alt="Astrofront"
                loading="lazy"
                decoding="async"
                style={styled}
                width="300"
                height="66"
                className="inline-block dark:hidden"
              ></img>
              <img
                src="/images/logo-darkmode.png"
                alt="Astrofront"
                loading="lazy"
                decoding="async"
                style={styled}
                width="300"
                height="66"
                className="hidden dark:inline-block"
              ></img>
            </Link>
          </div>

          <ul className="hidden lg:flex lg:gap-x-12 ">
            <NavLinkHed />
          </ul>

          <div className=" flex justify-between items-center w-[140px]">
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleTheme} />
              {/* sun icon*/}
              <BsSunFill className="swap-on h-4 w-4  dark:text-white" />
              {/* moon icon*/}
              <BsMoonFill className="swap-off h-4 w-4 dark:text-white" />
            </label>
            <Link to="/Cart" className="indicator">
              <BsCart3 className="h-6 w-6 dark:text-white" />
              {numItemsInCart == 0 ? (
                ""
              ) : (
                <span className="badge badge-xs w-4 h-4 rounded-full bg-black dark:bg-white dark:text-black badge-primary indicator-item">
                  {numItemsInCart}
                </span>
              )}
            </Link>
            {!user ? (
              <div className="relative">
                <Link
                  className="text-xl text-text-dark hover:text-text-primary dark:border-darkmode-border text-black dark:text-white flex items-center"
                  to="/Login"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="dark:hover:text-darkmode-primary"
                    height="1.2em"
                    width="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                  </svg>
                </Link>
              </div>
            ) : user.photo != null ? (
              <span
                onClick={handelUser}
                className="relative inline-flex items-center  cursor-pointer justify-center w-9 h-9 overflow-hidden bg-[#8181814f] rounded-full dark:bg-gray-600"
              >
                <img src={user?.photo} alt="User" />
              </span>
            ) : (
              <>
                <span
                  onClick={handelUser}
                  className="relative inline-flex items-center  cursor-pointer justify-center w-9 h-9 overflow-hidden bg-[#8181814f] rounded-full dark:bg-gray-600"
                >
                  <span>{setstring(user?.name ?? "D") ?? ""}</span>
                </span>
              </>
            )}
            {MnuUsere ? <MnuUser /> : null}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
