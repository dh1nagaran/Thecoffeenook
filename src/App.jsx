import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import About from './Components/About';
import Contacts from './Components/Contacts'
import Cart from './Components/Cart';
import Categories from './Components/Categories';
import './Media.css'
import Confirm from './Components/Confirm';
const App = () => {
  return (
    <div className='main-contain'>

      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contacts />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/category' element={<Categories />} />
            <Route path='/confirm' element={<Confirm />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div >
  )
}

export default App
