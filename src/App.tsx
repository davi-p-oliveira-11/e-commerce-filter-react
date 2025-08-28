import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Recommended from './components/Recommended/Recommended'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <>
     <Sidebar />
     <Navbar />
     <Recommended />
     <Products />
    </>
  )
}

export default App
