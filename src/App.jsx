import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './features/login/components/login'
import OrderConfirmation from './features/Order/OrderConfirmation'
import Basket from './features/basket/components/basket'
import Menu from './features/Menu/Menu'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  async function getData() {
    const url = "https://twelve-mangos-mate.loca.lt/foods";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
      getData()
  }, [ ]);

  return (
      <Login /> 
  )
}

export default App

