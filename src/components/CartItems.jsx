import React from "react";
import CartItem from "./CartItem";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
// import { motion } from "motion/react";
function CartItems({ carts }) {
  return (
    <motion.div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <AnimatePresence>
          {carts.map((item) => {
            return <CartItem key={item.cartID} {...item} />;
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default CartItems;
