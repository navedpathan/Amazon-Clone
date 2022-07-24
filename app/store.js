import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slice/cartSlice';

// The Global Store setup
export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})