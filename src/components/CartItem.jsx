import React from "react";
import { formatPrice, sterTitel } from "../Util";
import { useDispatch } from "react-redux";
import { editquantity, removItem } from "../features/Cart/cartSlice";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
function CartItem(item) {
  console.log(item);
  const { cartID, brand, image, price, quantity, name } = item;
  const [setValue] = useState(quantity);
  const dicpatch = useDispatch();
  const decrementquantity = (value) => {
    if (value !== 0)
      dicpatch(editquantity({ cartID, quantity: parseInt(--value) }));
  };
  const incrementquantity = (value) => {
    if (value <= 20)
      dicpatch(editquantity({ cartID, quantity: parseInt(++value) }));
  };
  const handelremovItem = () => {
    dicpatch(removItem({ cartID }));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={cartID}
    >
      <div className="space-y-6 mb-5">
        <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-2xl dark:border-gray-700 dark:bg-gray-800 md:p-3">
          <form>
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <img
                className="h-30 w-30 object-cover rounded-t-lg   md:rounded-none md:rounded-s-lg"
                src={image}
                alt="imac image"
              />
              <lasbel htmlFor="counter-input" className="sr-only">
                Choose quantity:
              </lasbel>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <IconButton
                    size="sm"
                    className="inline-flex z-5 rounded-full cursor-pointer  h-5 w-5 shrink-0 items-center justify-center  border border-gray-300 bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    value={quantity}
                    onClick={() => {
                      decrementquantity(quantity);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                  </IconButton>
                  <input
                    type="text"
                    id="counter-input"
                    data-input-counter
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                    value={quantity}
                    required
                  />
                  <IconButton
                    size="sm"
                    className="inline-flex z-5 rounded-full cursor-pointer   h-5 w-5 shrink-0 items-center justify-center  border border-gray-300 bg-gray-900  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    value={quantity}
                    onClick={() => {
                      incrementquantity(quantity);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                  </IconButton>
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <button
                    type="button"
                    className="inline-flex rounded-full items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                    onClick={handelremovItem}
                  >
                    <svg
                      className="me-1.5 h-5 w-5 rounded-full"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 flex flex-col justify-between items-start space-y-4 md:order-2 md:max-w-md">
                <h2 className="font-bold text-gray-900 hover:underline dark:text-white">
                  {sterTitel(name)}
                </h2>
                <a
                  href="#"
                  className="text-gray-900 hover:underline dark:text-white"
                >
                  {brand}
                </a>

                <div className="flex items-center gap-4">
                  <p className="text-base font-bold text-gray-900 dark:text-white">
                    {formatPrice(price)}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default CartItem;
