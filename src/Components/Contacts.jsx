import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import '../Media.css'



const Contacts = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <>
            <div className='contacts' id="contacts">
                <div className='contacts-1'>
                    <h2>Contact Us – The Coffee Nook</h2>
                    <p>We’d love to hear from you! Whether you have a question, want to share feedback, or simply want to say hello, feel free to reach out.</p>
                    <p> Our team at The Coffee Nook is always happy to connect with fellow coffee lovers.</p>
                    <h2>Visit Us:</h2>
                    <p>Come by our café to enjoy a freshly brewed cup and a cozy atmosphere.</p>
                    <p> Our doors are open every day from 7 AM to 9 PM.</p>
                    <h2>Location:</h2>
                    <p>123 Brew Street, Coffee City, IN 90210</p>
                </div>
                <div className='contacts-2'>
                    <h2>Call Us:</h2>
                    <p>(123) 456-7890</p>
                    <h2>Email:</h2>
                    <p>hello@thecoffeenook.com</p>
                    <h2>Follow Us:  </h2>
                    <div className='social'>
                        <SlSocialInstagram />
                        <SlSocialFacebook />
                        <SlSocialYoutube />
                        <SlSocialTwitter />
                    </div>

                </div>
            </div >
            <footer style={{ textAlign: "center", padding: "10px" }}>© {year} Dhinagaran</footer>
        </>
    )
}

export default Contacts