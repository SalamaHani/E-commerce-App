import React from "react";
import ContenerProduct from "../components/ContenerProduct";
import CartItems from "../components/CartItems";
import GridProductF from "../components/GridProductF";
import { useSelector } from "react-redux";
import EmptyCart from "@/components/EmptyCart";

function Favorites() {
  const Favorites = useSelector((state) => state.cartState.Favorites);
  if (Favorites.length == 0)
    return <EmptyCart Titel={"No Favorites products"} />;
  return (
    <div className="container py-20">
      <h2 className="text-xl font-semibold text-gray-900 mb-5 dark:text-white sm:text-2xl">
        place your Favorites Products
      </h2>
      <hr className=" border-[#b8b8b8]" />
      <div className="container  products dark:bg-gray-900 flex-2/12">
        <GridProductF />
      </div>
    </div>
  );
}

export default Favorites;
