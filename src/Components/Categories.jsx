import React from 'react'
import useConn from '../Database/dataconn'
import { useNavigate } from 'react-router-dom'
import '../Media.css'

const Categories = () => {
    let { products } = useConn()
    let navigate = useNavigate()
    return (
        <div className='category'>
            <div>
                <h1 style={{ textAlign: "center" }}>Our Categories</h1>
            </div>
            <div className='top-cat'>
                <div className='top-1'>

                    <img src="https://geographical-ivory-xljsao2yi1.edgeone.app/11415001.png" alt='image' />
                    <h3>Hot Coffee</h3>
                    <p>Bold, warm, and comforting — the perfect start to your day.</p>
                    <button onClick={() => { navigate("/menu") }}> See Menu</button>

                </div>
                <div className='top-2'>
                    <img src="https://rising-olive-twrrx6w7ky.edgeone.app/view-3d-coffee-cup-removebg-preview.png" alt='image' />
                    <h3>Cold Coffee</h3>
                    <p>Chilled, smooth, and refreshing — your cool companion anytime.</p>
                    <button onClick={() => { navigate("/menu") }}> See Menu</button>



                </div>
                <div className='top-3'>

                    <img src="https://perfect-red-uqg1c3myki.edgeone.app/side-view-latte-with-coffee-beans-old-newspaper.png" alt='image' />
                    <h3>Special Cofee</h3>
                    <p>Crafted with passion, made for true coffee lovers.</p>
                    <button onClick={() => { navigate("/menu") }}> See Menu</button>


                </div>
                <div className='top-4'>

                    <img src="https://secret-gray-xvswjwqobw.edgeone.app/side-view-latte-with-coffee-beans-candles-white-cup-removebg-preview.png" alt='image' />
                    <h3>Dessert Cofee</h3>
                    <p>Sweet, indulgent blends that taste like happiness.</p>
                    <button onClick={() => { navigate("/menu") }}> See Menu</button>


                </div>

            </div >
        </div >
    )
}

export default Categories