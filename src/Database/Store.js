import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './CartSlice'

export  const stroe=configureStore(
    {
    reducer:{
        cart:cartSliceReducer
    }
})
