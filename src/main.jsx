import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./features/login/components/login.jsx";
import Menu from "./features/Menu/Menu.jsx";
import Basket from "./features/basket/components/basket.jsx";
import OrderConfirmation from "./features/Order/OrderConfirmation.jsx";
import ProductCard from "./features/Menu/ProductCard.jsx";
import PhoneNumberInput from "./features/login/phonenumberinput.jsx";
import { OrderContextProvider } from "./context/Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // (
    //   <div className="grid place-items-center h-screen text-yellow-500 text-3xl font-bold">
    //     AYAM KAMPUX{" "}
    //   </div>
    // ),
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/menu",
    element: <Menu />,
  },

  {
    path: "/order",
    element: <Basket />,
  },

  {
    path: "/confirmation/:id",
    element: <OrderConfirmation />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OrderContextProvider>
      <RouterProvider router={router} />
    </OrderContextProvider>
  </React.StrictMode>
);
