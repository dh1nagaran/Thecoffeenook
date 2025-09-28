import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem(state,action)
        {
            console.log(action.payload)
            state.push(action.payload)

        },
        remove(state,action)
        {
            let cartdelete=state.filter(carts=>carts.id!==action.payload)
            return cartdelete

        },
        cartItem(state,action)
        {
            state.push(action.payload)

        }
    }
})

export default cartSlice.reducer
export let{addItem,remove,cartItem} =cartSlice.actions 