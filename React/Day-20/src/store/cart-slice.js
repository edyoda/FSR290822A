import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    totalAmount: 0,
    totalCount: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart : (state, action ) => {
            const productId = action.payload.id;
            const price = action.payload.price;

            const index = state.products.findIndex(product => product.id === productId);

            if(index >= 0){
                state.products[index].quantity += 1;
                
            }else{
                state.products.push(
                    {
                        id: productId,
                        quantity: 1
                    }
                )
            }

            state.totalAmount += price;
            state.totalCount += 1;

            localStorage.setItem('cart', JSON.stringify(state));


        },

        initializeCart: (state, action) => {
            const products = action.payload.products;
            const totalAmount = action.payload.totalAmount;
            const totalCount = action.payload.totalCount;


            state.products = products;
            state.totalAmount = totalAmount;
            state.totalCount = totalCount;
        },

        removeFromCart: (state, action) => {

        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice;
