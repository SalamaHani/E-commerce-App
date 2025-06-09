import { createSlice } from "@reduxjs/toolkit";
import { Type } from "lucide-react";
import { toast } from "sonner";

// import { action } from "../../page/Regeiser";

const defuletStat = {
  Favorites: [],
  cartItem: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getlocalstorg = () => {
  return JSON.parse(localStorage.getItem("Cart")) || defuletStat;
};
const themes = localStorage.getItem("themes");

const cartSlice = createSlice({
  name: "cart",
  initialState: getlocalstorg(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const isItem = state.cartItem.find(
        (item) => item.cartID === product.cartID
      );
      if (isItem) {
        isItem.quantity += product.quantity;
      } else {
        state.cartItem.push(product);
      }
      state.numItemsInCart += product.quantity;
      state.cartTotal += product.quantity * product.price;
      cartSlice.caseReducers.calculetTotel(state);
      themes == "dark"
        ? toast.success("Add Product to Cart", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        : toast.success("Add Product to Cart", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
      localStorage.setItem("Cart", JSON.stringify(state));
    },
    removItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItem.find((item) => item.cartID == cartID);
      state.cartItem = state.cartItem.filter((item) => item.cartID !== cartID);
      state.numItemsInCart -= product.quantity;
      state.cartTotal -= product.quantity * product.price;
      themes == "dark"
        ? toast.success("Remove Product to Cart", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        : toast.success("Remove Product to Cart", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
      cartSlice.caseReducers.calculetTotel(state);
    },
    editquantity: (state, action) => {
      const { cartID, quantity } = action.payload;
      const product = state.cartItem.find((item) => item.cartID == cartID);
      state.numItemsInCart += quantity - product.quantity;
      state.cartTotal += (quantity - product.quantity) * product.price;
      product.quantity = quantity;
      cartSlice.caseReducers.calculetTotel(state);
    },
    calculetTotel: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("Cart", JSON.stringify(state));
    },
    celerCart: () => {
      localStorage.setItem("Cart", JSON.stringify(defuletStat));
      return defuletStat;
    },
    addFavoritesItem: (state, action) => {
      const { product } = action.payload;
      const isItem = state.Favorites.find(
        (item) => item.cartID == product.cartID
      );
      if (!isItem) state.Favorites.push(product);
      themes == "dark"
        ? toast.success("Add product Item Favorites products ", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        : toast("Add product Item Favorites products", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
      localStorage.setItem("Cart", JSON.stringify(state));
    },
    removProductF: (state, action) => {
      const id = action.payload;
      state.Favorites = state.Favorites.filter((item) => item.cartID !== id);
      themes == "dark"
        ? toast("Remov product Item Favorites products", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        : toast.success("Remov product Item Favorites products", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
      localStorage.setItem("Cart", JSON.stringify(state));
    },
    togelFavaret: (state, action) => {
      ///reomv fafaert prodcct
      const { id, image, name, price, brand, quantity } = action.payload;
      const Favorites = state.Favorites.some((item) => item.cartID == id);
      if (Favorites) {
        state.Favorites = state.Favorites.filter((item) => item.cartID !== id);
        themes == "dark"
          ? toast.success("Remov product Item Favorites products", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          : toast.success("Remov product Item Favorites products", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            });
        localStorage.setItem("Cart", JSON.stringify(state));
      } else {
        ///add favaret product
        const cartProduct = {
          cartID: id,
          image,
          name,
          price,
          brand,
          quantity,
        };
        const isItem = state.Favorites.find(
          (item) => item.cartID == cartProduct.cartID
        );
        if (!isItem) state.Favorites.push(cartProduct);
        themes == "dark"
          ? toast.success("Add product Item Favorites products", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          : toast.success("Add product Item Favorites products", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            });
        localStorage.setItem("Cart", JSON.stringify(state));
      }
    },
  },
});
export const {
  addItem,
  removItem,
  calculetTotel,
  editquantity,
  addFavoritesItem,
  celerCart,
  reomvFavaretItem,
  togelFavaret,
  removProductF,
} = cartSlice.actions;
export default cartSlice.reducer;
