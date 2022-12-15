import {createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth-slice",
    initialState: {isLoggedIn : false, user: {}},
    reducers: {
        login : (state, action)  => {
            state.isLoggedIn = true;
            state.user.username = action.payload;
        },
        logout : (state) => {
            state.isLoggedIn = false;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;