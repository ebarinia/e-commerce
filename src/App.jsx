import { useState } from 'react'
import ShopContainer from './container/ShopContainer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import Navbar from './components/Navbar'
import BasketList from './components/BasketList'
import Home from './components/Home'

function App() {

  testhello = "hello";

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/items" element={<ShopContainer/>}/>
        <Route path="/basket" element={<BasketList/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
