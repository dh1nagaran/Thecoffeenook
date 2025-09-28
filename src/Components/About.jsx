import React from 'react'
import about from '../assets/Coffeeshop.gif'
import '../Media.css'

const About = () => {
    return (
        <div className='about-container' id="about">

            <div className='about-contain'>
                <center>
                    <img src={about} alt="Image"  />
                </center>

            </div>
            <div className='about-contain-2'>
                <h1>About Us</h1>
                <p>Welcome to <strong>The Coffee Nook</strong>, where every cup is a celebration of craftsmanship, flavor, and community. We are passionate about bringing you the finest coffee experience — from the carefully selected beans to the artful brewing methods that unlock their fullest potential. Our coffee is more than just a beverage — it’s an experience. We source premium beans from trusted farms around the world, ensuring that every cup is fresh, sustainable, and full of character. Whether you’re in the mood for a bold espresso, a velvety cappuccino, or a refreshing cold brew, our blends are crafted to delight every palate.</p>
                <p>At <strong>The Coffee Nook</strong>, we believe coffee brings people together. Our cozy spaces invite you to relax, connect, and savor each moment. Our expert baristas are always here to guide you through our menu and help you discover new favorites. With passion, precision, and care, we’re here to make your coffee experience unforgettable.</p>
            </div>
        </div>
    )
}

export default About