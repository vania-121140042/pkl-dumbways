// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Login from './features/login/components/login'
import OrderConfirmation from './features/Order/OrderConfirmation'
import Basket from './features/basket/components/basket'
import Menu from './features/Menu/Menu'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)

  async function getData() {
    const url = "https://loud-corners-suffer.loca.lt/login";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      } catch (error) {
       console.error(error.message);
    }

    return (
      <Login /> 
  );
  };
};

export default App