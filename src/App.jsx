import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './features/login/components/login'
import OrderConfirmation from './features/Order/OrderConfirmation'
import Basket from './features/basket/components/basket'
import Menu from './features/Menu/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <OrderConfirmation />
  
  )
}

export default App
