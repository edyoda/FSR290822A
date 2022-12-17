import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import productSlice from './product-slice';

const store = configureStore({
    reducer: {
        'auth' : authSlice.reducer,
        'productStore': productSlice.reducer
    }
});

export default store;