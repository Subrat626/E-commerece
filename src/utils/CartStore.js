import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './CartSlice'

const cartStore = configureStore({
reducer:{
    cart:cartReducer,
}
})

export default cartStore;