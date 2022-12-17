import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "product-slice",
    initialState: {
        products: []
    },
    reducers:{
        addProducts : (state, action) => {
            // console.log(action)
            state.products.push(...action.payload);
        }
    }
});


export const productActions = productSlice.actions;
export default productSlice;
