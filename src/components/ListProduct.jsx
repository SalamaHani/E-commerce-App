import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";
import CardListProduct from "./CardListProduct";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
function ListProduct() {
  const { products } = useLoaderData();
  return (
    <>
      <div className="mt-12 grid gap-y-8">
        <AnimatePresence>
          {products.map((item) => {
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CardListProduct key={item.id} item={item} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ListProduct;
