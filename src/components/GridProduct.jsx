import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
function GridProduct() {
  const { products } = useLoaderData();

  return (
    <>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                <ProductCard key={item.id} item={item} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
}

export default GridProduct;
