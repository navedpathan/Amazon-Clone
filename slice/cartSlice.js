import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Actions
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(cartItem => cartItem.id == action.payload.id);

            const newCart = [...state.items];
            
            if (index >=0) {
                // the items exists in the cart... remove it...
                newCart.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload.id}) as its not in Cart`
                );
            }
            state.items = newCart;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the global slice
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) => state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;