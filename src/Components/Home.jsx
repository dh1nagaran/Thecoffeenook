import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from '../assets/bg-5.png'
import Navbar from './Navbar'
import About from './About'
import Contacts from './Contacts'
import Categories from './Categories'
import '../Media.css'


const Home = () => {
  let navigate = useNavigate()
  function submit() {
    navigate("/menu")
  }

  return (
    <>
      <div>
        <div className='home-container'>
          <div className='home-contain'>
            <h1> Welcome to The Coffee Nook</h1>
            <p>At <strong>The Coffee Nook</strong>, we believe every cup tells a story. From our bold espresso blends to smooth, creamy lattes, we craft each drink with care, passion, and the finest beans.
              Whether you're here to relax, meet friends, or grab a quick cup on the go, our cozy atmosphere and rich flavors make every visit a delightful experience.</p>
            <button onClick={submit}> Explore our menu</button>
          </div>
          <div className='home-contain-2'>
            <center>
              <img src={back} style={{ width: "400px", height: "400px" }} />
            </center>
          </div>
        </div>
      </div >
      <About />
      <Categories />
      <Contacts />
    </>

  )
}

export default Home