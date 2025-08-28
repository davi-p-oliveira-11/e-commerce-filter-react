import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Recommended from './components/Recommended/Recommended'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Recommended />
     <Products />
    </>
  )
}

export default App
