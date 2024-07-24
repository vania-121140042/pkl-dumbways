import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./features/login/components/login";
import OrderConfirmation from "./features/Order/OrderConfirmation";
import Basket from "./features/basket/components/basket";
import Menu from "./features/Menu/Menu";
import axios from "axios";
import { api } from "./lib/api";
import { createContext } from "react";

function App() {
  // const [count, setCount] = useState(0)

  async function getData() {
    api
      .get("/foods")
      .then((response) => {
        console.log("foods", response);
      })
      .catch((error) => {
        console.error(error);
      });

    // const url = "https://huge-socks-stop.loca.lt/foods";
    // try {
    //   const response = await fetch(url);
    //   if (!response.ok) {
    //     throw new Error(`Response status: ${response.status}`);
    //   }
    // } catch (error) {
    //   console.error(error.message);
    // }
  }

  return <Login />;
}
export default App;
