import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        < Route path='' element={<Home/>}/>
        <Route path='' element={<PlaceOrder/>}/>
        <Route path='/' element={<Cart/>}/>

      </Routes>

      
    </div>
  )
}

export default App
