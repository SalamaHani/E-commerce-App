import React from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import ProductcartFava from "./productcartFava";

function GridProductF() {
  const FavoritesItem = useSelector((state) => state.cartState.Favorites);
  return (
    <>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {FavoritesItem.map((item) => {
            return (
              <motion.div
                key={item.cartID}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductcartFava item={item} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
}

export default GridProductF;
