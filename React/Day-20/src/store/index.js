import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import productSlice from './product-slice';

const store = configureStore({
    reducer: {
        'auth' : authSlice.reducer,
        'productStore': productSlice.reducer,
        'cartStore': cartSlice.reducer
    }
});

export default store;