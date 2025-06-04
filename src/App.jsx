import {
  Route,
  BrowserRouter,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Products from "./page/Products";
import SingelProduct from "./page/SingelProduct";
import Cart from "./page/Cart";
import Error from "./page/Error";
import Lading from "./page/Lading";
import { loader as loaderfaferet } from "./page/Lading";
import { loader as loaderproduact } from "./page/Products";
import { loader as loaderSinglProduct } from "./page/SingelProduct";
import { action as actionRegesetr } from "./page/Regester";
import { action as loginaction } from "./page/Login";
import { loader as lodercheckout } from "./page/Checkout";
// import { action as actionCackeout } from "./assets/components/Checkoutlyaout";
import { action as actionorders } from "./components/Checkoutlyaout";
import { loader as loderorders } from "./page/Orders";
import Regester from "./page/Regester";
import Login from "./page/Login";
import { store } from "./stor";
import Checkout from "./page/Checkout";
import Orders from "./page/Orders";
import Favorites from "./page/Favorites";
import ForgotPassword from "./page/ForgotPassword";
import Profile from "./page/Profile";
import { loder as lodergetuserdata } from "./page/Profile";
import { action as ActionEditproifle } from "./components/ModeEditP";
import { action as actionReviews } from "./components/SetRewive";
import { action as actionforgetpass } from "./page/ForgotPassword";
import { action as resetpass } from "./page/resetpassword";
import ResetPassword from "./page/resetpassword";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Lading />,
        errorElement: <Error />,
        loader: loaderfaferet(queryClient),
      },
      {
        path: "About",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <Error />,
        loader: loaderproduact(queryClient),
      },
      {
        path: "Products/:IDProduct",
        element: <SingelProduct />,
        // errorElement: <Error />,
        loader: loaderSinglProduct(store, queryClient),
        action: actionReviews(store),
      },
      {
        path: "Checkout",
        element: <Checkout />,
        loader: lodercheckout(store),
        action: actionorders(store),
      },
      {
        path: "orders",
        element: <Orders />,
        // errorElement: <Error />,
        loader: loderorders(store),
      },
      {
        path: "Favorites",
        element: <Favorites />,
      },
      {
        path: "Cart",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <Error />,
    action: loginaction(store),
  },
  {
    path: "/Profile",
    element: <Profile />,
    errorElement: <Error />,
    loader: lodergetuserdata(store),
    action: ActionEditproifle(store),
  },
  {
    path: "/Registr",
    element: <Regester />,
    ErorrElment: <Error />,
    action: actionRegesetr(store),
  },
  {
    path: "/Forgotpassword",
    element: <ForgotPassword />,
    action: actionforgetpass(store),
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
    action: resetpass(store),
  },
  {
    path: "*",
    element: <Error />,
    ErorrElment: <Error />,
  },
]);
const queryclinet = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryclinet}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
