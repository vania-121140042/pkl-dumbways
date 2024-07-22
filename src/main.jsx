import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './features/login/components/login.jsx';
import Menu from './features/Menu/Menu.jsx';
import Basket from './features/basket/components/basket.jsx';
import OrderConfirmation from './features/Order/OrderConfirmation.jsx';
import ProductCard from './features/Menu/ProductCard.jsx';
import PhoneNumberInput from './features/login/phonenumberinput.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>pindah ke login yaa </div>,
  },

  {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/menu",
    element: <Menu/>,
  },

  {
    path: "/order",
    element: <Basket/>,
  },

  {
    path: "/confirmation",
    element: <OrderConfirmation/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
