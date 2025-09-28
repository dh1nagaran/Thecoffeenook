import React from 'react'
import logo from '../assets/Logo.png'
import Home from './Home'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import '../Media.css'



const Navbar = () => {
    let navigate = useNavigate()
    function homes() {
        navigate("/home")
    }
    return (
        <div className='nav-container'>
            <div className='logo-contain'>
                <img src={logo} alt='Logo' style={{ width: "150px", height: "125px" }} />
                <h1>The Coffee Nook</h1>
            </div>
            <div className='link-contain'>
                <ul>
                    <li onClick={homes}>Home</li>
                    <Link to="about" smooth={true} duration={500}>
                        <li onClick={() => { navigate("/home/#about") }}>About Us</li>
                    </Link>
                    <li onClick={(() => { navigate("/menu") })}>Our Menu</li>
                    <Link to="contacts" smooth={true} duration={500}>
                        <li onClick={() => { navigate("/home/#contacts") }}>Contact</li>
                    </Link>
                </ul>
            </div>

        </div>
    )
}

export default Navbar