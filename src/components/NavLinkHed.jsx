import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
function NavLinkHed() {
  const links = [
    { id: 1, url: "/", text: "Home" },
    { id: 2, url: "About", text: "About" },
    { id: 3, url: "products", text: "Products" },
    { id: 4, url: "Cart", text: "Cart" },
    { id: 5, url: "Checkout", text: "Checkout" },
    { id: 6, url: "orders", text: "Orders" },
    // { id: 7, url: "Favorites", text: "Favorites" },
    // { id: 8, url: "Profile", text: "Profile" },
  ];
  const user = useSelector((state) => state.userState.user);
  const cartFavorites = useSelector((state) => state.cartState.Favorites);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "Checkout" || url === "orders") && !user) return null;
        if (url === "Favorites" && cartFavorites.length == 0) return null;
        return (
          <li key={id}>
            <NavLink
              to={url}
              className="text-sm/6 p-2 mb-2  rounded-md hover:bg-[#8181814f] dark:hover:bg-[#eceaea5d] font-title font-title text-gray-900 dark:text-white"
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavLinkHed;
