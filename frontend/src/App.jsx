// import React from 'react'
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
  <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Cart'element={<Cart />} />
       <Route path='/Order'element={<PlaceOrder/>}/>
       <Route path='/Verify'element={<Verify/>}/>
        <Route path='/Myorders'element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App

