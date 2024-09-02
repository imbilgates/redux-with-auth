import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        showInput: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        editPage: (state) => {
            state.showInput = !state.showInput;
        },
    },
});



export const { login, logout, editPage } = authSlice.actions;
export default authSlice.reducer;