import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Database/CartSlice'
import empty from '../assets/empty.jpg'
import { BsShopWindow } from "react-icons/bs";
import '../Media.css'
import { CiShop } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const Cart = () => {



    const carts = useSelector((state) => { return state.cart })
    let navigate = useNavigate()



    console.log(carts)
    let dispatch = useDispatch()

    let removedata = (reduxItemid) => {
        dispatch(remove(reduxItemid))


    }

    if (carts.length == 0) {
        return (
            <div>
                <CiShop style={{ width: "50px", height: "50px", padding: "0px", color: "black", cursor: "pointer" }} onClick={() => { navigate("/menu") }} />
                <center>
                    <img src={empty} style={{ width: "500px", height: "500px", textAlign: "center" }} />
                </center>
            </div>
        )
    }

    else {

        return (
            <div className='menu-container'>
                <CiShop style={{ width: "50px", height: "50px", padding: "0px", color: "white", cursor: "pointer" }} onClick={() => { navigate("/menu") }} />


                <div className='menu-conatiner-2'>
                    {
                        carts.map((product, id) => {
                            return (
                                <div key={id} className='menu-contain'>
                                    <div className='menu-contain-img'>
                                        <img src={product.image} />
                                    </div>
                                    <div className='menu-contain-details'>
                                        <center>

                                            <h5>{product.category}</h5>
                                            <h3>{product.name}</h3>
                                            <p>{product.description}</p>
                                            <div className='cart-data' >
                                                <h4>Price : {product.price} $</h4>
                                            </div>

                                            <div className='cart-btn'>
                                                <button style={{ backgroundColor: "green" }}>Buy</button>
                                                <button onClick={(id) => removedata(product.id)} style={{ backgroundColor: "red" }}>Remove</button>
                                            </div>
                                        </center>
                                    </div>

                                </div>
                            )

                        })
                    }
                </div>
            </div >
        )
    }
}


export default Cart